import { Injectable } from '@nestjs/common';
import { ExpenseRepository } from './expense.repository';
import { ExpensingDto } from './dto/expense.dto';

@Injectable()
export class ExpenseService {
  constructor(private expenseRepository: ExpenseRepository) {}

  createExpense(expensingDto: ExpensingDto) {
    const accounting = this.expenseRepository.create(expensingDto);

    return accounting;
  }

  deleteExpense(id: string) {
    return this.expenseRepository.delete(id);
  }
}
