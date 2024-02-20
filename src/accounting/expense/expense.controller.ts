import { Body, Controller, Delete, Post } from '@nestjs/common';
import { ExpenseService } from './expense.service';
import { ExpensingDto } from './dto/expense.dto';

@Controller('expense')
export class ExpenseController {
  constructor(private expenseService: ExpenseService) {}

  @Post('create')
  createExpense(@Body() expensingDto: ExpensingDto) {
    return this.expenseService.createExpense(expensingDto);
  }

  @Delete('delete')
  deleteAccounting(@Body('id') id: string) {
    return this.expenseService.deleteExpense(id);
  }
}
