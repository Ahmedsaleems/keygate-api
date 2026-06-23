import { IssuedApiKey } from '../../../domain/issued-api-key.vo';
import { ApiKeyResponseDto } from './api-key.response.dto';

export class CreateApiKeyResponseDto {
  apiKey!: string;
  key!: ApiKeyResponseDto;

  static fromDomain(issuedApiKey: IssuedApiKey): CreateApiKeyResponseDto {
    return {
      apiKey: issuedApiKey.getRawKey(),
      key: ApiKeyResponseDto.fromDomain(issuedApiKey.getApiKey()),
    };
  }
}