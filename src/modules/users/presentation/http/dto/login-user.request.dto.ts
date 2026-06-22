import { IsEmail, IsString, MinLength } from 'class-validator';

export class LoginUserRequestDto {
  @IsEmail()
  email!: string;

  @IsString()
  @MinLength(8)
  password!: string;
}