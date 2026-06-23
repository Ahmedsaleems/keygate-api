import { InvalidApiKeyProjectIdError } from './error';

export class ApiKeyProjectId {
  private constructor(private readonly value: string) {}

  static fromString(value: string): ApiKeyProjectId {
    const normalized = value.trim();

    if (!normalized) {
      throw new InvalidApiKeyProjectIdError(value);
    }

    return new ApiKeyProjectId(normalized);
  }

  toString(): string {
    return this.value;
  }

  equals(other: ApiKeyProjectId): boolean {
    return this.value === other.value;
  }
}