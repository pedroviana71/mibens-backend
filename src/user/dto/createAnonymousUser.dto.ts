import { IsBoolean, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateAnonymousUserDto {
  @IsBoolean()
  @IsOptional()
  readonly isAnonymous: boolean;
}
