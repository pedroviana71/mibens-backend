import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { TransportationAppRepository } from './transportation-app.repository';
import { TransportationAppDto } from './dto/transportation-app.dto';

@Injectable()
export class TransportationAppService {
  constructor(
    private transportationAppRepository: TransportationAppRepository,
  ) {}

  async createTransportationApp(transportationAppDto: TransportationAppDto) {
    try {
      transportationAppDto.name.map(async (app) => {
        await this.transportationAppRepository.createTransportationApp({
          name: app,
          userId: transportationAppDto.userId,
        });
      });
    } catch (error) {
      throw new HttpException('Error creating apps', HttpStatus.BAD_REQUEST);
    }
    return;
  }

  async deleteTransportationApp(id: string) {
    return await this.transportationAppRepository.deleteTransportationApp(id);
  }

  getAllTransportationsApp(userId: string) {
    return this.transportationAppRepository.getAllTransportationsApp(userId);
  }
}
