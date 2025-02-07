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

  create(creditCardDto: CreditCardDto) {
    const creditCard = this.creditCardModel.create(creditCardDto);

    return creditCard;
  }

  delete(id: string) {
    return this.creditCardModel.findByIdAndDelete(id);
  }
}
