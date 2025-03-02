import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountDto } from './dto/account.dto';

@Controller('account')
export class AccountController {
  constructor(private accountService: AccountService) {}

  @Post('create')
  createAccount(@Body() accountDto: AccountDto) {
    return this.accountService.createAccount(accountDto);
  }

  @Get()
  getAccounts(@Query('userId') userId: string) {
    return this.accountService.getAccounts(userId);
  }

  @Delete('delete')
  deleteAccount(@Body('id') id: string) {
    return this.accountService.deleteAccount(id);
  }
}
