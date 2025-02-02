import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AccessTokenGuard } from './common/guards/accessToken.guard';
import { APP_GUARD } from '@nestjs/core';
import { TransactionModule } from './transactions/transaction.module';
import { CategoriesModule } from './categories/categories.module';
import { CreditCardModule } from './creditCard/creditCard.module';
import { AccountModule } from './account/account.module';

@Module({
  imports: [
    UserModule,
    MongooseModule.forRoot(
      process.env.MONGO_URI || 'mongodb://localhost:27017/mibens',
    ),
    TransactionModule,
    CategoriesModule,
    CreditCardModule,
    AccountModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AccessTokenGuard,
    },
  ],
})
export class AppModule {}
