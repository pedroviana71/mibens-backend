import { Test } from '@nestjs/testing';
import { UserService } from './user.service';
import { UserRepository } from './user.repository';
import { JwtService } from '@nestjs/jwt';
import { TransportationAppService } from '../transportation-app/transportation-app.service';

describe('UserService', () => {
  let userService: UserService;

  const mockUserService = jest.fn((dto) => {
    return dto;
  });

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: UserRepository,
          useValue: mockUserService,
        },
        {
          provide: JwtService,
          useValue: {},
        },
        {
          provide: TransportationAppService,
          useValue: {},
        },
      ],
    }).compile();

    userService = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(userService).toBeDefined();
  });
});
