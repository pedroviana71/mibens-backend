import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Accounting extends Document {
  @Prop({ required: true })
  date: Date;

  @Prop({
    required: true,
  })
  appId: string;

  @Prop()
  revenue: number;

  @Prop()
  expense: number;

  @Prop()
  idExpense: string;

  @Prop()
  tip: number;

  @Prop()
  inicialKilometer: number;

  @Prop()
  finalKilometer: number;

  @Prop({ maxLength: 240 })
  comments: string;
}

export const AccountingSchema = SchemaFactory.createForClass(Accounting);
