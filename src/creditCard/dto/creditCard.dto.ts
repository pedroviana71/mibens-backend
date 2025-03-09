import {
  IsBoolean,
  IsMongoId,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreditCardDto {
  @IsNotEmpty()
  @IsMongoId()
  userId: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(55)
  name: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(55)
  color: string;

  @IsNumber()
  @IsNotEmpty()
  limit: number;

  @IsNumber()
  @IsNotEmpty()
  dueDay: number;

  @IsNumber()
  @IsNotEmpty()
  closingDay: number;

  @IsOptional()
  @IsMongoId()
  accountId: string;

  @IsOptional()
  @IsBoolean()
  isActive: boolean;

  createdAt: Date;

  updatedAt: Date;
}
