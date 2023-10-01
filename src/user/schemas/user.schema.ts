import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop()
  name: string;

  @Prop()
  lastName: string;

  @Prop()
  isCarRented: boolean;

  @Prop()
  rentPrice: number;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop()
  premiumExpiration: Date;

  @Prop({
    default: false,
  })
  isPremium: boolean;

  @Prop()
  refreshToken: string;

  @Prop({
    default: Date.now,
  })
  createdAt: Date;

  @Prop()
  updatedAt: Date;

  @Prop({
    default: true,
  })
  isActive: boolean;

  @Prop({ default: false })
  isInvited: boolean;

  @Prop({ default: false })
  hasInvitedUser: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
