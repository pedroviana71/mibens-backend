import { Injectable } from '@nestjs/common';
import { AccountingRepository } from './accounting.repository';
import { AccountingDto } from './dto/accounting.dto';

@Injectable()
export class AccountingService {
  constructor(private accountingRepository: AccountingRepository) {}

  createAccounting(accountingDto: AccountingDto) {
    const accounting =
      this.accountingRepository.createAccounting(accountingDto);

    return accounting;
  }

  deleteAccounting(id: string) {
    return this.accountingRepository.deleteAccounting(id);
  }
}
