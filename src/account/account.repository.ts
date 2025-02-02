import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Account } from './schemas/account.schema';
import { AccountDto } from './dto/account.dto';

@Injectable()
export class AccountRepository {
  constructor(
    @InjectModel(Account.name)
    private accountmodel: Model<Account>,
  ) {}

  create(account: AccountDto) {
    // const newAccounting = this.creditCardModel.create(accounting);
    // return newAccounting;
  }

  delete(id: string) {
    return this.accountmodel.findByIdAndDelete(id);
  }
}
