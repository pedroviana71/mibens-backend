import { IsNotEmpty, IsString } from 'class-validator';

export class TransportationAppDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  userId: string;
}
