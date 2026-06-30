import { IsNotEmpty, IsString, ValidateIf } from 'class-validator';

export class CreateProjectEndpointRequestDto {
  @IsString()
  @IsNotEmpty()
  method!: string;

  @IsString()
  @IsNotEmpty()
  path!: string;

  @IsString()
  @IsNotEmpty()
  upstreamUrl!: string;
}

export class UpdateProjectEndpointRequestDto {
  @ValidateIf((_object, value) => value !== undefined)
  @IsString()
  @IsNotEmpty()
  method?: string;

  @ValidateIf((_object, value) => value !== undefined)
  @IsString()
  @IsNotEmpty()
  path?: string;

  @ValidateIf((_object, value) => value !== undefined)
  @IsString()
  @IsNotEmpty()
  upstreamUrl?: string;
}
