import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import {
  TransportationApp,
  TransportationAppSchema,
} from './schemas/transportation-app.schema';
import { TransportationAppController } from './transportation-app.controller';
import { TransportationAppRepository } from './transportation-app.repository';
import { TransportationAppService } from './transportation-app.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: TransportationApp.name, schema: TransportationAppSchema },
    ]),
  ],
  controllers: [TransportationAppController],
  providers: [TransportationAppRepository, TransportationAppService],
})
export class TransportationAppModule {}
