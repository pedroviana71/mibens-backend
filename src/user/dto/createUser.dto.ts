import {
  IsArray,
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  readonly lastName: string;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  readonly password: string;

  @IsNumber()
  @IsOptional()
  readonly rentPrice: 'own' | 'rent';

  @IsArray()
  @IsNotEmpty()
  readonly apps: string[];

  @IsBoolean()
  @IsNotEmpty()
  readonly isCarRented: boolean;
}
