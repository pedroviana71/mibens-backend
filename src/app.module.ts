import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AccessTokenGuard } from './common/guards/accessToken.guard';
import { APP_GUARD } from '@nestjs/core';
import { AccountingModule } from './accounting/accounting.module';

@Module({
  imports: [
    UserModule,
    MongooseModule.forRoot('mongodb://localhost:27017/mobilits'),
    AccountingModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AccessTokenGuard,
    },
  ],
})
export class AppModule {}
