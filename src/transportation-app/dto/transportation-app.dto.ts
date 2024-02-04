import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class TransportationAppDto {
  @IsNotEmpty()
  @IsArray()
  name: string[];

  @IsNotEmpty()
  @IsString()
  userId: string;
}
