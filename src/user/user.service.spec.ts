import { Test } from '@nestjs/testing';
import { UserService } from './user.service';
import { UserRepository } from './user.repository';
import { CreateUserDto } from './dto';
import * as argon2 from 'argon2';
import { JwtService } from '@nestjs/jwt';
import { Document } from 'mongoose';

describe('UserService', () => {
  let userService: UserService;
  let userRepository: UserRepository;

  const user: CreateUserDto = {
    name: 'test',
    email: 'test',
    password: 'test',
    isAnonymous: true,
  };

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: UserRepository,
          useValue: {
            findOneByEmail: jest.fn(),
            createUser: jest.fn().mockReturnValue({ ...user, _id: '1' }),
            updateUser: jest.fn(),
            findById: jest.fn().mockReturnValue({ ...user, _id: '1' }),
            logout: jest.fn(),
          },
        },
        {
          provide: JwtService,
          useValue: {
            signAsync: jest.fn().mockReturnValue('token'),
          },
        },
      ],
    }).compile();

    userService = module.get<UserService>(UserService);
    userRepository = module.get<UserRepository>(UserRepository);
  });

  it('should be defined', () => {
    expect(userService).toBeDefined();
  });

  it('it should create a user', async () => {
    jest.spyOn(argon2, 'hash').mockResolvedValue('hashedPassword');

    const createdUser = await userService.createUser(user);

    expect(createdUser).toEqual({
      tokens: {
        accessToken: expect.any(String),
        refreshToken: expect.any(String),
      },
      user: {
        name: 'test',
        _id: expect.any(String),
      },
    });
  });

  it('should return a user', async () => {
    const userData = await userService.getUser('1');

    expect(userData).toEqual({
      ...userData,
      _id: '1',
    });
  });
});
