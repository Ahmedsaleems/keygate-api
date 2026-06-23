import { InvalidApiKeyNameError } from './error';

export class ApiKeyName {
  private static readonly MIN_LENGTH = 3;
  private static readonly MAX_LENGTH = 80;

  private constructor(private readonly value: string) {}

  static create(value: string): ApiKeyName {
    const normalized = value.trim();

    if (
      normalized.length < this.MIN_LENGTH ||
      normalized.length > this.MAX_LENGTH
    ) {
      throw new InvalidApiKeyNameError(value);
    }

    return new ApiKeyName(normalized);
  }

  toString(): string {
    return this.value;
  }

  equals(other: ApiKeyName): boolean {
    return this.value === other.value;
  }
}