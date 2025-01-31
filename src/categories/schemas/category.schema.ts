import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Category extends Document {
  @Prop()
  name: string;

  @Prop()
  userId: Types.ObjectId;

  @Prop({
    default: Date.now,
  })
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
