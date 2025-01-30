import {
  IsMongoId,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class TransactionDto {
  @IsNotEmpty()
  @IsMongoId()
  userId: string;

  @IsNumber()
  @IsNotEmpty()
  amount: number;

  @IsNumber()
  @IsNotEmpty()
  title: string;

  @IsOptional()
  @MaxLength(240)
  description: string;

  @IsString()
  @IsNotEmpty()
  type: 'expense' | 'revenue';

  @IsOptional()
  @IsMongoId()
  accountId: string; 

  @IsOptional()
  @IsMongoId()
  creditCardId: string;

  @IsOptional()
  @IsMongoId()
  categoryId: string;

  createdAt: Date;

  updatedAt: Date;
}
