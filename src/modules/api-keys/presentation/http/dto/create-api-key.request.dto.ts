import { IsNotEmpty, IsString } from 'class-validator';

export class CreateApiKeyRequestDto {
  @IsString()
  @IsNotEmpty()
  name!: string;
}
