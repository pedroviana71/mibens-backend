import { Injectable } from '@nestjs/common';
import { TransactionRepository } from './transaction.repository';
import { TransactionDto } from './dto/transaction.dto';

@Injectable()
export class TransactionService {
  constructor(private transactionRepository: TransactionRepository) {}

  createTransaction(transactionDto: TransactionDto) {
    const transaction = this.transactionRepository.create(transactionDto);

    return transaction;
  }

  deleteTransaction(id: string) {
    return this.transactionRepository.delete(id);
  }
}
