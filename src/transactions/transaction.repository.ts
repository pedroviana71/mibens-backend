import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TransactionDto } from './dto/transaction.dto';
import { Transaction } from './schemas/transaction.schema';

interface TransactionQuery {
  userId: string;
  type?: 'expense' | 'revenue' | 'transfer';
  paymentDate: {
    $gte: Date;
    $lte: Date;
  };
  creditCardId?: {
    $ne: string | null;
  };
  accountId?: {
    $ne: string | null;
  };
  ignore?: boolean;
  paymentType?: 'single' | 'recurring';
}

interface Populate {
  path: string;
  select?: string;
}

@Injectable()
export class TransactionRepository {
  constructor(
    @InjectModel(Transaction.name)
    private transactionModel: Model<Transaction>,
  ) {}

  create(accounting: TransactionDto) {
    const transaction = this.transactionModel.create(accounting);

    return transaction;
  }

  async find(transactionQuery: TransactionQuery, populate?: Populate[]) {
    return await this.transactionModel.find({}).populate(populate).lean();
  }

  delete(id: string) {
    return this.transactionModel.findByIdAndDelete(id);
  }
}
