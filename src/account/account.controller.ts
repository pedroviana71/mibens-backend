import { Body, Controller, Delete, Post } from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountDto } from './dto/account.dto';

@Controller('account')
export class AccountController {
  constructor(private accountService: AccountService) {}

  @Post('create')
  createAccount(@Body() accountDto: AccountDto) {
    return this.accountService.createAccount(accountDto);
  }

  @Delete('delete')
  deleteAccount(@Body('id') id: string) {
    return this.accountService.deleteAccount(id);
  }
}
