import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class CreditCard extends Document {
  @Prop({ type: Types.ObjectId, required: true, ref: 'User' })
  userId: Types.ObjectId;

  @Prop({ required: true, maxlength: 80 })
  name: string;

  @Prop({required: true})
  color: string

  @Prop({ required: true })
  limit: number;

  @Prop({ required: true })
  dueDay: number;

  @Prop({ required: true })
  closingDay: number;

  @Prop({ type: Types.ObjectId, ref: 'Account' })
  accountId: Types.ObjectId;

  @Prop({ default: true })
  isActive: boolean;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const CreditCardSchema = SchemaFactory.createForClass(CreditCard);
