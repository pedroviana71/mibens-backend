import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TransactionDto } from './dto/transaction.dto';
import { Transaction } from './schemas/transaction.schema';

@Injectable()
export class TransactionRepository {
  constructor(
    @InjectModel(Transaction.name)
    private transactionModel: Model<Transaction>,
  ) {}

  create(accounting: TransactionDto) {
    const newAccounting = this.transactionModel.create(accounting);

    return newAccounting;
  }

  delete(id: string) {
    return this.transactionModel.findByIdAndDelete(id);
  }
}
