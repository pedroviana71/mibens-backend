import { Injectable } from '@nestjs/common';
import { AccountRepository } from './account.repository';
import { AccountDto } from './dto/account.dto';

@Injectable()
export class AccountService {
  constructor(private accountRepository: AccountRepository) {}

  createAccount(accountDto: AccountDto) {
    const account = this.accountRepository.create(accountDto);
    return account;
  }

  deleteAccount(id: string) {
    return this.accountRepository.delete(id);
  }
}
