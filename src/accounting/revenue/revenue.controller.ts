import { Body, Controller, Delete, Post } from '@nestjs/common';
import { RevenueDto } from './dto/revenue.dto';
import { RevenueService } from './revenue.service';

@Controller('revenue')
export class RevenueController {
  constructor(private revenueService: RevenueService) {}

  @Post('create')
  createReRevenue(@Body() revenueDto: RevenueDto) {
    return this.revenueService.createRevenue(revenueDto);
  }

  @Delete('delete/:id')
  deleteRevenue(@Body('id') id: string) {
    return this.revenueService.deleteRevenue(id);
  }
}
