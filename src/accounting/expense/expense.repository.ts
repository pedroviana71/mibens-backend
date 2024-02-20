import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ExpensingDto } from './dto/expense.dto';
import { Expense } from './schemas/expense.schema';

@Injectable()
export class ExpenseRepository {
  constructor(
    @InjectModel(Expense.name)
    private expenseModel: Model<Expense>,
  ) {}

  create(accounting: ExpensingDto) {
    const newAccounting = this.expenseModel.create(accounting);

    return newAccounting;
  }

  delete(id: string) {
    return this.expenseModel.findByIdAndDelete(id);
  }
}
