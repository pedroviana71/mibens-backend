import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class GlobalCategory extends Document {
  @Prop()
  name: string;

  @Prop({
    default: Date.now,
  })
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const GlobalCategorySchema = SchemaFactory.createForClass(GlobalCategory);
