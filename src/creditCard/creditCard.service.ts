import { Injectable } from '@nestjs/common';
import { CreditCardRepository } from './creditCard.repository';
import { CreditCardDto } from './dto/creditCard.dto';

@Injectable()
export class CreditCardService {
  constructor(private creditCardRepository: CreditCardRepository) {}

  createCreditCard(creditCardDto: CreditCardDto) {
    const creditCard = this.creditCardRepository.create(creditCardDto);
    return creditCard;
  }

  deleteCreditCard(id: string) {
    return this.creditCardRepository.delete(id);
  }
}
