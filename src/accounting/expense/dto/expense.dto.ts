import {
  IsDate,
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class ExpensingDto {
  @IsDateString()
  @IsNotEmpty()
  date: Date;

  @IsString()
  @IsNotEmpty()
  appId: string;

  @IsOptional()
  @IsNumber()
  revenue: number;

  @IsNumber()
  @IsOptional()
  expense: number;

  @IsOptional()
  @IsString()
  idExpense: string;

  @IsNumber()
  @IsOptional()
  tip: number;

  @IsOptional()
  @IsNumber()
  inicialKilometer: number;

  @IsOptional()
  @IsNumber()
  finalKilometer: number;

  @IsOptional()
  @IsString()
  comments: string;
}
