import { Body, Controller, Delete, Post } from '@nestjs/common';
import { CreditCardService } from './creditCard.service';
import { CreditCardDto } from './dto/creditCard.dto';

@Controller('creditCard')
export class CreditCardController {
  constructor(private creditCardService: CreditCardService) {}

  @Post('create')
  createCreditCard(@Body() creditCardDto: CreditCardDto) {
    return this.creditCardService.createCreditCard(creditCardDto);
  }

  @Delete('delete')
  deleteCreditCard(@Body('id') id: string) {
    return this.creditCardService.deleteCreditCard(id);
  }
} 
