import { IsEmpty, IsNotEmpty, IsString } from 'class-validator';

export class refreshPayloadDto {
  @IsNotEmpty()
  @IsString()
  readonly userId: string;

  @IsNotEmpty()
  @IsString()
  readonly refreshToken: string;
}
