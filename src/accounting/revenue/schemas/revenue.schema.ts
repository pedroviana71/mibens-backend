import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Revenue extends Document {
  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  date: Date;

  @Prop({
    required: true,
  })
  appId: string;

  @Prop()
  revenue: number;

  @Prop()
  inicialKilometer: number;

  @Prop()
  finalKilometer: number;

  @Prop({ maxLength: 240 })
  comments: string;
}

export const RevenueSchema = SchemaFactory.createForClass(Revenue);
