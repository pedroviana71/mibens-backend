import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
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

  @Get('revenues')
  getAllRevenues(getExpensesDto) {
    return this.transactionService.getAllRevenues();
  }

  @Get('expenses')
  getAllExpenses(
    @Query('userId') userId: string,
    @Query('startDate') startDate: string,
    @Query('endDate') endDate: string,
  ) {
    return this.transactionService.getAllExpenses({
      userId,
      startDate,
      endDate,
    });
  }

  @Delete('delete')
  deleteTransaction(@Body('id') id: string) {
    return this.transactionService.deleteTransaction(id);
  }
}
