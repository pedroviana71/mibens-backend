import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common';
import { CreditCardService } from './creditCard.service';
import { CreditCardDto } from './dto/creditCard.dto';

@Controller('creditCard')
export class CreditCardController {
  constructor(private creditCardService: CreditCardService) {}

  @Post('create')
  createCreditCard(@Body() creditCardDto: CreditCardDto) {
    return this.creditCardService.createCreditCard(creditCardDto);
  }

  @Get()
  getCreditCards(@Query('userId') userId: string) {
    return this.creditCardService.getCreditCards(userId);
  }

  @Delete('delete')
  deleteCreditCard(@Body('id') id: string) {
    return this.creditCardService.deleteCreditCard(id);
  }
}
