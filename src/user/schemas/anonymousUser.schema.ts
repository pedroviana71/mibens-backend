import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class AnonymousUser extends Document {
  @Prop({default: true})
  isAnonymous: boolean;

  @Prop()
  refreshToken: string | null;

  @Prop({
    default: Date.now,
  })
  createdAt: Date;

  @Prop()
  updatedAt: Date;

  @Prop({ default: false })
  isInvited: boolean;

  @Prop()
  invitedBy: string; 
}

export const UserSchema = SchemaFactory.createForClass(AnonymousUser);
