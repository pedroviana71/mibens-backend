import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreditCard } from './schemas/creditCard.schema';
import { CreditCardDto } from './dto/creditCard.dto';

@Injectable()
export class CreditCardRepository {
  constructor(
    @InjectModel(CreditCard.name)
    private creditCardModel: Model<CreditCard>,
  ) {}

  create(creditCard: CreditCardDto) {
    // const newAccounting = this.creditCardModel.create(accounting);

    // return newAccounting;
  }

  delete(id: string) {
    return this.creditCardModel.findByIdAndDelete(id);
  }
}
