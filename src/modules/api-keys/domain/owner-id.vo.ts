import { InvalidApiKeyOwnerIdError } from './error';

export class ApiKeyOwnerId {
  private constructor(private readonly value: string) {}

  static fromString(value: string): ApiKeyOwnerId {
    const normalized = value.trim();

    if (!normalized) {
      throw new InvalidApiKeyOwnerIdError(value);
    }

    return new ApiKeyOwnerId(normalized);
  }

  toString(): string {
    return this.value;
  }

  equals(other: ApiKeyOwnerId): boolean {
    return this.value === other.value;
  }
}