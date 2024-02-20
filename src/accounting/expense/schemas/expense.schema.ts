import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Expense extends Document {
  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  date: Date;

  @Prop({
    required: true,
  })
  expenseId: string;

  @Prop()
  revenue: number;

  @Prop()
  inicialKilometer: number;

  @Prop()
  finalKilometer: number;

  @Prop({ maxLength: 240 })
  comments: string;
}

export const ExpenseSchema = SchemaFactory.createForClass(Expense);
