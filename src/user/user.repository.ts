import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto';
import { User } from './schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LogoutDto } from './dto/logout.dto';
import { AnonymousUser } from './schemas/anonymousUser.schema';

@Injectable()
export class UserRepository {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,

    @InjectModel(AnonymousUser.name)
    private anonymousUserModel: Model<AnonymousUser>,
  ) {}

  async createUser(dto: CreateUserDto) {
    const user = await this.userModel.create(dto);

    return user;
  }

  async createAnonymousUser() {
    const user = await this.anonymousUserModel.create({isAnonymous: true});
    
    return user;
  }

  async findOneByEmail(email: string) {
    const user = await this.userModel.findOne({ email });
    return user;
  }

  async findById(id: string) {
    const user = await this.userModel.findById(id);
    return user;
  }

  async updateUser(userId: string, refreshToken: string) {
    const user = await this.userModel.findByIdAndUpdate(userId, {
      refreshToken,
    });
    return user;
  }

  async logout(userId: LogoutDto) {
    const user = await this.userModel.findByIdAndUpdate(userId, {
      refreshToken: null,
    });
    return user;
  }
}
