import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Revenue } from './schemas/revenue.schema';
import { RevenueDto } from './dto/revenue.dto';

@Injectable()
export class RevenueRepository {
  constructor(
    @InjectModel(Revenue.name)
    private expenseModel: Model<Revenue>,
  ) {}

  create(revenueDto: RevenueDto) {
    const newRevenue = this.expenseModel.create(revenueDto);

    return newRevenue;
  }

  delete(id: string) {
    return this.expenseModel.findByIdAndDelete(id);
  }
}
