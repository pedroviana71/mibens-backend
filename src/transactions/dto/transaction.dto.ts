import {
  IsDate,
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
  @MaxLength(55)
  title: string;

  @IsOptional()
  @MaxLength(240)
  description: string;

  @IsString()
  @IsNotEmpty()
  type: 'expense' | 'revenue' | 'transfer';

  @IsString()
  @IsNotEmpty()
  paymentType: 'single' | 'recurring';

  @IsOptional()
  @IsString()
  paymentFrequency: 'monthly' | 'yearly';

  @IsOptional()
  @IsDate()
  startDate: Date;

  @IsOptional()
  @IsDate()
  endDate: Date;

  @IsOptional()
  @IsMongoId()
  accountId: string;

  @IsOptional()
  @IsMongoId()
  targetedAccountId: string;

  @IsOptional()
  @IsMongoId()
  creditCardId: string;

  @IsOptional()
  @IsMongoId()
  categoryId: string;

  createdAt: Date;

  updatedAt: Date;
}
