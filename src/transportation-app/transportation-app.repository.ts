import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TransportationApp } from './schemas/transportation-app.schema';
import { TransportationAppDto } from './dto/transportation-app.dto';
import { CreateTransportationAppDto } from './dto/create-transportation-app.dto';

@Injectable()
export class TransportationAppRepository {
  constructor(
    @InjectModel(TransportationApp.name)
    private transportationAppmodel: Model<TransportationApp>,
  ) {}

  createTransportationApp(transportationApp: CreateTransportationAppDto) {
    const newApp = this.transportationAppmodel.create(transportationApp);

    return newApp;
  }

  deleteTransportationApp(id: string) {
    return this.transportationAppmodel.findByIdAndDelete(id);
  }

  getAllTransportationsApp(userId: string) {
    return this.transportationAppmodel.find({
      userId,
    });
  }
}
