import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { TransactionRepository } from './transaction.repository';
import { TransactionDto } from './dto/transaction.dto';
import { endOfMonth, startOfMonth } from 'date-fns';

interface TransactionParams {
  userId: string;
  startDate: string;
  endDate: string;
}

@Injectable()
export class TransactionService {
  constructor(private transactionRepository: TransactionRepository) {}

  createTransaction(transactionDto: TransactionDto) {
    const transaction = this.transactionRepository.create(transactionDto);

    return transaction;
  }

  async getAllExpenses(transactionParams: TransactionParams) {
    const { userId, startDate, endDate } = transactionParams;

    const paymentDate = {
      $gte: startOfMonth(startDate || new Date()),
      $lte: endOfMonth(endDate || new Date()),
    };

    const populate = [
      {
        path: 'creditCardId',
        select: 'name',
      },
      {
        path: 'accountId',
        select: 'name',
      },
    ];

    console.log(paymentDate);

    const singleTransactions = await this.transactionRepository.find(
      {
        userId,
        paymentDate,
        paymentType: 'single',
        ignore: false,
      },
      populate,
    );

    const recurringTransactions = await this.transactionRepository.find(
      {
        userId,
        paymentDate,
        paymentType: 'recurring',
        ignore: false,
      },
      populate,
    );

    console.log(singleTransactions);

    // return singleTransactions;
  }

  getAllRevenues() {}

  deleteTransaction(id: string) {
    return this.transactionRepository.delete(id);
  }
}
