import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop()
  name: string | null;

  @Prop()
  profilePicture: string | null;

  @Prop({required: true})
  isAnonymous: boolean;

  @Prop({ required: true })
  email: string | null;

  @Prop({ required: true })
  password: string | null;

  @Prop()
  premiumExpiration: Date | null;

  @Prop({
    default: false,
  })
  isPremium: boolean;

  @Prop()
  refreshToken: string | null;

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

  @Prop()
  invitedBy: string; 
}

export const UserSchema = SchemaFactory.createForClass(User);
