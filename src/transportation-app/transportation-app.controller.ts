import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  Post,
  UseInterceptors,
} from '@nestjs/common';

import { TransportationAppService } from './transportation-app.service';
import { TransportationAppDto } from './dto/transportation-app.dto';

@Controller('transportation-app')
export class TransportationAppController {
  constructor(private transportationAppService: TransportationAppService) {}

  @Post('create')
  async createTransportationApp(
    @Body() transportationApp: TransportationAppDto,
  ) {
    return await this.transportationAppService.createTransportationApp(
      transportationApp,
    );
  }

  @Delete('delete')
  async deleteTransportationApp(@Body('id') id: string) {
    return await this.transportationAppService.deleteTransportationApp(id);
  }

  @Get('getAll')
  async getAllTransportationsApp(@Body('userId') userId: string) {
    return await this.transportationAppService.getAllTransportationsApp(userId);
  }
}
