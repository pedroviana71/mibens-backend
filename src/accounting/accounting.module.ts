import { Module } from '@nestjs/common';
import { AccountingController } from './accounting.controller';
import { AccountingRepository } from './accounting.repository';
import { AccountingService } from './accounting.service';

@Module({
  controllers: [AccountingController],
  providers: [AccountingRepository, AccountingService],
})
export class AccountingModule {}
