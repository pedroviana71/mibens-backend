import { Injectable } from '@nestjs/common';
import { AccountDto } from './dto/account.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Account } from './schemas/account.schema';
import { Model } from 'mongoose';

@Injectable()
export class AccountService {
  constructor(
    @InjectModel(Account.name)
    private accountmodel: Model<Account>,
  ) {}

  createAccount(accountDto: AccountDto) {
    const account = this.accountmodel.create(accountDto);
    return account;
  }

  getAccounts(userId: string) {
    return this.accountmodel.find({ userId });
  }

  deleteAccount(id: string) {
    return this.accountmodel.findByIdAndDelete(id);
  }
}
