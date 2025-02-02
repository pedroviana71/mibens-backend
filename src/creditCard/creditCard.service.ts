import { Injectable } from '@nestjs/common';
import { CreditCardRepository } from './creditCard.repository';
import { CreditCardDto } from './dto/creditCard.dto';

@Injectable()
export class CreditCardService {
  constructor(private creditCardRepository: CreditCardRepository) {}

  createCreditCard(transactionDto: CreditCardDto) {
    // const accounting = this.creditCardRepository.create(transactionDto);
    // return accounting;
  }

  deleteCreditCard(id: string) {
    return this.creditCardRepository.delete(id);
  }
}
