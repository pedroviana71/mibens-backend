import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class TransportationApp extends Document {
  @Prop()
  name: string[];

  @Prop()
  userId: string;
}

export const TransportationAppSchema =
  SchemaFactory.createForClass(TransportationApp);
