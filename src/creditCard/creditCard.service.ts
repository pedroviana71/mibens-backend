import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreditCardDto } from './dto/creditCard.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreditCard } from './schemas/creditCard.schema';

@Injectable()
export class CreditCardService {
  constructor(
    @InjectModel(CreditCard.name)
    private creditCardModel: Model<CreditCard>,
  ) {}

  createCreditCard(creditCardDto: CreditCardDto) {
    const creditCard = this.creditCardModel.create(creditCardDto);
    return creditCard;
  }

  getCreditCards(userId: string) {
    if (!userId) {
      throw new HttpException('userId not provided', HttpStatus.BAD_REQUEST);
    }
    return this.creditCardModel.find({ userId });
  }

  deleteCreditCard(id: string) {
    return this.creditCardModel.findByIdAndDelete(id);
  }
}
