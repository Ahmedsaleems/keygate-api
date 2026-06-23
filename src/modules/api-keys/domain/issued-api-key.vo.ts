import { ApiKey } from './api-key.entity';
import { InvalidIssuedApiKeyError } from './error';

export class IssuedApiKey {
  private constructor(
    private readonly apiKey: ApiKey,
    private readonly rawKey: string,
  ) {}

  static create(apiKey: ApiKey, rawKey: string): IssuedApiKey {
    if (!rawKey || rawKey.trim().length === 0) {
      throw new InvalidIssuedApiKeyError();
    }

    return new IssuedApiKey(apiKey, rawKey);
  }

  getApiKey(): ApiKey {
    return this.apiKey;
  }

  getRawKey(): string {
    return this.rawKey;
  }
}