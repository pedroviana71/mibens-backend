import { IsBoolean, IsNotEmpty } from 'class-validator';

export class CreateAnonymousUserDto {
  @IsBoolean()
  @IsNotEmpty()
  readonly isAnonymous: boolean;
}
