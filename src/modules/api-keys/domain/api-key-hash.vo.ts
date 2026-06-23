import { InvalidApiKeyHashError } from './error';

export class ApiKeyHash {
  private constructor(private readonly value: string) {}

  static create(value: string): ApiKeyHash {
    const normalized = value.trim();

    if (!normalized) {
      throw new InvalidApiKeyHashError();
    }

    return new ApiKeyHash(normalized);
  }

  toString(): string {
    return this.value;
  }

  equals(other: ApiKeyHash): boolean {
    return this.value === other.value;
  }
}