import { Injectable } from '@nestjs/common';
import { AccountRepository } from './account.repository';
import { AccountDto } from './dto/account.dto';

@Injectable()
export class AccountService {
  constructor(private accountRepository: AccountRepository) {}

  createAccount(accountDto: AccountDto) {
    // const accounting = this.creditCardRepository.create(transactionDto);
    // return accounting;
  }

  deleteAccount(id: string) {
    return this.accountRepository.delete(id);
  }
}
