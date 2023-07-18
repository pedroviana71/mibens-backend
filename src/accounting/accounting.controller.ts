import { Controller, Get, Post } from '@nestjs/common';
import { AccountingService } from './accounting.service';

@Controller('accounting')
export class AccountingController {
  constructor(private accountingService: AccountingService) {}

  @Post()
  addAccounting() {
    return 'Add accounting';
  }
}
