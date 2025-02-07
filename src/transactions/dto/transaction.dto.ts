import {
  IsBoolean,
  IsISO8601,
  IsMongoId,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  ValidateIf,
} from 'class-validator';

export class TransactionDto {
  @IsNotEmpty()
  @IsMongoId()
  userId: string;

  @IsNumber()
  @IsNotEmpty()
  amount: number;

  @IsNotEmpty()
  @MaxLength(55)
  title: string;

  @IsOptional()
  @MaxLength(240)
  description: string;

  @IsOptional()
  @IsISO8601()
  paymentDate: Date;

  @IsString()
  @IsNotEmpty()
  type: 'expense' | 'revenue' | 'transfer';

  @IsString()
  @IsNotEmpty()
  paymentType: 'single' | 'recurring';

  @ValidateIf((obj) => obj.paymentType === 'recurring')
  @IsString()
  @IsNotEmpty()
  paymentFrequency: 'monthly' | 'yearly';

  @ValidateIf((obj) => obj.paymentType === 'recurring')
  @IsISO8601()
  startDate: Date;

  @ValidateIf((obj) => obj.paymentType === 'recurring')
  @IsISO8601()
  endDate: Date;

  @IsOptional()
  @IsMongoId()
  accountId: string;

  @IsOptional()
  @IsMongoId()
  @ValidateIf((obj) => obj.type === 'transfer')
  targetedAccountId: string;

  @IsOptional()
  @IsMongoId()
  creditCardId: string;

  @ValidateIf((obj) => !!obj.creditCardId)
  @IsNumber()
  installments: number;

  @IsOptional()
  @IsMongoId()
  categoryId: string;

  @IsOptional()
  @IsISO8601()
  paidAt: Date;

  @IsOptional()
  @IsBoolean()
  ignore: boolean;

  createdAt: Date;

  updatedAt: Date;
}
