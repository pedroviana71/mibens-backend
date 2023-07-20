import { Module } from '@nestjs/common';
import { AccountingController } from './accounting.controller';
import { AccountingRepository } from './accounting.repository';
import { AccountingService } from './accounting.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Accounting, AccountingSchema } from './schemas/accounting.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Accounting.name, schema: AccountingSchema },
    ]),
  ],
  controllers: [AccountingController],
  providers: [AccountingRepository, AccountingService],
})
export class AccountingModule {}
