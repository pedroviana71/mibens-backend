import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Accounting } from './schemas/accounting.schema';
import { Model } from 'mongoose';
import { AccountingDto } from './dto/accounting.dto';

@Injectable()
export class AccountingRepository {
  constructor(
    @InjectModel(Accounting.name)
    private accountingModel: Model<Accounting>,
  ) {}

  createAccounting(accounting: AccountingDto) {
    const newAccounting = this.accountingModel.create(accounting);

    return newAccounting;
  }

  deleteAccounting(id: string) {
    return this.accountingModel.findByIdAndDelete(id);
  }
}
