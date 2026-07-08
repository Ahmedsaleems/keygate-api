import { InvalidUsageLogReferenceIdError } from './error';

export class UsageLogApiKeyId {
  private constructor(private readonly value: string) {}

  static fromString(value: string): UsageLogApiKeyId {
    const normalized = value.trim();

    if (!normalized) {
      throw new InvalidUsageLogReferenceIdError('apiKeyId', value);
    }

    return new UsageLogApiKeyId(normalized);
  }

  toString(): string {
    return this.value;
  }
}