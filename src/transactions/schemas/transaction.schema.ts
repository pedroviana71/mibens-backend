import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Transaction extends Document {
  @Prop({ type: Types.ObjectId, required: true, ref: 'User' })
  userId: Types.ObjectId;

  @Prop({ required: true })
  amount: number;

  @Prop({ required: true, maxlength: 55 })
  title: string;

  @Prop({ maxlength: 240 })
  description: string;

  @Prop({ default: Date.now })
  transactionDate: Date;

  @Prop({ required: true })
  type: 'expense' | 'revenue' | 'transfer';

  @Prop({ required: true })
  paymentType: 'single' | 'recurring' | 'installment';

  @Prop()
  paymentFrequency: 'monthly' | 'yearly';

  @Prop()
  recurringStartDate: Date;

  @Prop()
  recurringEndDate: Date;

  @Prop()
  @Prop({ type: Types.ObjectId, ref: 'Account' })
  accountId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Account' })
  targetedAccountId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'CreditCard' })
  creditCardId: Types.ObjectId;

  @Prop()
  installments: number;

  @Prop()
  installmentsDates: Date[];

  //verificar como fazer para popular o categoryId ou o globalCategoryId -- dar uma olhada no refPath do mongoose
  @Prop({ type: Types.ObjectId, ref: 'Category' })
  categoryId: Types.ObjectId;

  @Prop()
  paidAt: Date;

  @Prop({ default: false })
  ignore: boolean;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);
