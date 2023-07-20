import { Injectable } from '@nestjs/common';
import { TransportationAppRepository } from './transportation-app.repository';
import { TransportationAppDto } from './dto/transportation-app.dto';

@Injectable()
export class TransportationAppService {
  constructor(
    private transportationAppRepository: TransportationAppRepository,
  ) {}

  async createTransportationApp(transportationAppDto: TransportationAppDto) {
    const transportationApp =
      await this.transportationAppRepository.createTransportationApp(
        transportationAppDto,
      );

    return transportationApp;
  }

  async deleteTransportationApp(id: string) {
    return await this.transportationAppRepository.deleteTransportationApp(id);
  }

  getAllTransportationsApp(userId: string) {
    return this.transportationAppRepository.getAllTransportationsApp(userId);
  }
}
