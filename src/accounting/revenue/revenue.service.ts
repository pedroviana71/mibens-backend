import { Injectable } from '@nestjs/common';
import { RevenueDto } from './dto/revenue.dto';
import { RevenueRepository } from './revenue.repository';

@Injectable()
export class RevenueService {
  constructor(private revenueRepository: RevenueRepository) {}

  createRevenue(revenueDto: RevenueDto) {
    const accounting = this.revenueRepository.create(revenueDto);

    return accounting;
  }

  deleteRevenue(id: string) {
    return this.revenueRepository.delete(id);
  }
}
