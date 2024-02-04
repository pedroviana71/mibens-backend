import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user.schema';
import { JwtModule } from '@nestjs/jwt';
import { AccessTokenStrategy } from './strategies/accessToken.strategy';
import { RefreshTokenStrategy } from './strategies/refreshToken.strategy';
import { TransportationAppService } from 'src/transportation-app/transportation-app.service';
import { TransportationAppModule } from 'src/transportation-app/transportation-app.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    JwtModule.register({}),
    TransportationAppModule,
  ],
  controllers: [UserController],
  providers: [
    UserRepository,
    UserService,
    AccessTokenStrategy,
    RefreshTokenStrategy,
  ],
})
export class UserModule {}
