import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Transaction extends Document {
  @Prop({ type: Types.ObjectId, required: true })
  userId: Types.ObjectId;

  @Prop({ required: true })
  amount: number;

  @Prop({ required: true, maxlength: 55 })
  title: string;

  @Prop({ maxlength: 240 })
  description: string;

  @Prop({ required: true })
  type: 'expense' | 'revenue' | 'transfer';

  @Prop({ required: true })
  paymentType: 'single' | 'recurring';

  @Prop()
  paymentFrequency: 'monthly' | 'yearly';

  @Prop()
  startDate: Date;

  @Prop()
  endDate: Date;

  @Prop({ type: Types.ObjectId })
  accountId: Types.ObjectId;

  @Prop()
  targetedAccountId: Types.ObjectId;

  @Prop({ type: Types.ObjectId })
  creditCardId: Types.ObjectId;

  @Prop({ type: Types.ObjectId })
  categoryId: Types.ObjectId;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);
