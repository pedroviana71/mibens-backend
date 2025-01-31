import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsOptional } from 'class-validator';
import { Document, Types } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop()
  name: string;

  @Prop()
  profilePicture: string;

  @Prop({required: true})
  isAnonymous: boolean;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop()
  @IsOptional()
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

  @Prop({type: Types.ObjectId})
  invitedBy: Types.ObjectId; 
}

export const UserSchema = SchemaFactory.createForClass(User);
