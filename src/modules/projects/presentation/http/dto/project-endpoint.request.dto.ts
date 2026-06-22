import { IsIn, IsString, MaxLength } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

const ALLOWED_ENDPOINT_METHODS = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'];

export class CreateProjectEndpointRequestDto {
  @IsString()
  @IsIn(ALLOWED_ENDPOINT_METHODS)
  method!: string;

  @IsString()
  @MaxLength(300)
  path!: string;

  @IsString()
  @MaxLength(1000)
  upstreamUrl!: string;
}

export class UpdateProjectEndpointRequestDto extends PartialType(
  CreateProjectEndpointRequestDto,
) {}