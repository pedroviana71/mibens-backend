import { Body, Controller, Delete, Post } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { TransactionDto } from './dto/transaction.dto';

@Controller('transaction')
export class TransactionController {
  constructor(private transactionService: TransactionService) {}

  @Post('create')
  createTransaction(@Body() transactionDto: TransactionDto) {
    console.log(transactionDto);
    return this.transactionService.createTransaction(transactionDto);
  }

  @Delete('delete')
  deleteTransaction(@Body('id') id: string) {
    return this.transactionService.deleteTransaction(id);
  }
}
