import { InvalidApiKeyPrefixError } from './error';

export class ApiKeyPrefix {
  private static readonly MAX_LENGTH = 30;

  private constructor(private readonly value: string) {}

  static create(value: string): ApiKeyPrefix {
    const normalized = value.trim();

    if (!normalized || normalized.length > this.MAX_LENGTH) {
      throw new InvalidApiKeyPrefixError(value);
    }

    return new ApiKeyPrefix(normalized);
  }

  toString(): string {
    return this.value;
  }

  equals(other: ApiKeyPrefix): boolean {
    return this.value === other.value;
  }
}