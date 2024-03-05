import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto';
import * as argon2 from 'argon2';
import { UserRepository } from './user.repository';
import { LoginUserDto } from './dto/loginUser.dto';
import { JwtService } from '@nestjs/jwt';
import { LogoutDto } from './dto/logout.dto';
import { TransportationAppService } from '../transportation-app/transportation-app.service';

@Injectable()
export class UserService {
  constructor(
    private userRepository: UserRepository,
    private transportationAppService: TransportationAppService,
    private jwtService: JwtService,
  ) {}

  async createUser(dto: CreateUserDto) {
    const { email, password, name, lastName, apps, isCarRented, rentPrice } =
      dto;

    const existingUser = await this.userRepository.findOneByEmail(email);

    if (existingUser) {
      throw new HttpException(
        { 'Email already exists': email },
        HttpStatus.FORBIDDEN,
      );
    }

    const hashedPassword = await argon2.hash(password);

    const user = await this.userRepository.createUser({
      name,
      lastName,
      email,
      password: hashedPassword,
      isCarRented,
      rentPrice,
    });

    try {
      await this.transportationAppService.createTransportationApp({
        userId: user._id,
        name: apps,
      });
    } catch (error) {
      console.log(error);
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }

    const tokens = await this.getTokensAndUpdate(user._id, user.name);

    return { tokens, user: { name: user.name, _id: user._id } };
  }

  async login(dto: LoginUserDto) {
    const { email, password } = dto;

    const user = await this.userRepository.findOneByEmail(email);

    console.log(user, 'user');

    if (!user) {
      throw new HttpException('Access denied', HttpStatus.FORBIDDEN);
    }

    const isPasswordCorrect = await argon2.verify(user.password, password);

    if (!isPasswordCorrect) {
      throw new HttpException('Access denied', HttpStatus.FORBIDDEN);
    }

    const tokens = await this.getTokensAndUpdate(user._id, user.name);

    return { tokens, user: { name: user.name, _id: user._id } };
  }

  async logout(userId: LogoutDto) {
    const user = await this.userRepository.logout(userId);
    if (!user) {
      throw new HttpException('user not found', HttpStatus.NOT_FOUND);
    }
    return 'Logged out';
  }

  async refresh(id: string, refreshToken: string) {
    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new HttpException('Access denied', HttpStatus.FORBIDDEN);
    }

    const isRefreshTokenMatching = await argon2.verify(
      user.refreshToken,
      refreshToken,
    );

    if (!isRefreshTokenMatching) {
      throw new HttpException('Access denied', HttpStatus.FORBIDDEN);
    }

    const tokens = await this.getTokensAndUpdate(user._id, user.name);

    return { tokens, user: user._id };
  }

  async getTokensAndUpdate(userId: string, username: string) {
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(
        {
          sub: userId,
          username,
        },
        {
          // secret: this.configService.get<string>('JWT_ACCESS_SECRET'),
          secret: 'teste',
          expiresIn: '15m',
        },
      ),
      this.jwtService.signAsync(
        {
          sub: userId,
          username,
        },
        {
          // secret: this.configService.get<string>('JWT_REFRESH_SECRET'),
          secret: 'teste',
          expiresIn: '7d',
        },
      ),
    ]);

    const hashedRefreshToken = await argon2.hash(refreshToken);

    await this.userRepository.updateUser(userId, hashedRefreshToken);

    return {
      accessToken,
      refreshToken,
    };
  }

  async getUser(userId: string) {
    const userData = await this.userRepository.findById(userId);
    const apps = await this.transportationAppService.getAllTransportationsApp(
      userId,
    );

    if (!userData) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    const user = { ...userData, apps };

    delete user.password;
    delete user.refreshToken;

    return user;
  }
}
