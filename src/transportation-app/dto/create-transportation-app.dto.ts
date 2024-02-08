import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTransportationAppDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsString()
  userId: string;
}
