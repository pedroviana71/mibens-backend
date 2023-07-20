import { Body, Controller, Delete, Post } from '@nestjs/common';
import { AccountingService } from './accounting.service';
import { AccountingDto } from './dto/accounting.dto';

@Controller('accounting')
export class AccountingController {
  constructor(private accountingService: AccountingService) {}

  @Post('create')
  createAccounting(@Body() accountingDto: AccountingDto) {
    return this.accountingService.createAccounting(accountingDto);
  }

  @Delete('delete')
  deleteAccounting(@Body('id') id: string) {
    return this.accountingService.deleteAccounting(id);
  }
}
