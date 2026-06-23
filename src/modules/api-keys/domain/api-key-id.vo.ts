import { randomUUID } from 'node:crypto';
import { InvalidApiKeyIdError } from './error';

export class ApiKeyId {
  private constructor(private readonly value: string) {}

  static create(): ApiKeyId {
    return new ApiKeyId(randomUUID());
  }

  static fromString(value: string): ApiKeyId {
    const normalized = value.trim();

    if (!normalized) {
      throw new InvalidApiKeyIdError(value);
    }

    return new ApiKeyId(normalized);
  }

  toString(): string {
    return this.value;
  }

  equals(other: ApiKeyId): boolean {
    return this.value === other.value;
  }
}