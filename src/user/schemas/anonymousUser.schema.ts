import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsOptional } from 'class-validator';
import { Document } from 'mongoose';

@Schema()
export class AnonymousUser extends Document {
  @Prop({default: true})
  @IsOptional()
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

export const AnonymousUserSchema = SchemaFactory.createForClass(AnonymousUser);
