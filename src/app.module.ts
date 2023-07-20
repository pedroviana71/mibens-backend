import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AccessTokenGuard } from './common/guards/accessToken.guard';
import { APP_GUARD } from '@nestjs/core';
import { AccountingModule } from './accounting/accounting.module';
import { TransportationAppModule } from './transportation-app/transportation-app.module';

@Module({
  imports: [
    UserModule,
    MongooseModule.forRoot('mongodb://localhost:27017/mobilits'),
    AccountingModule,
    TransportationAppModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AccessTokenGuard,
    },
  ],
})
export class AppModule {}
