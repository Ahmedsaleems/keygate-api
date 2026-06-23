import { InvalidApiKeyProjectEndpointIdError } from './error';

export class ApiKeyProjectEndpointId {
  private constructor(private readonly value: string) {}

  static fromString(value: string): ApiKeyProjectEndpointId {
    const normalized = value.trim();

    if (!normalized) {
      throw new InvalidApiKeyProjectEndpointIdError(value);
    }

    return new ApiKeyProjectEndpointId(normalized);
  }

  toString(): string {
    return this.value;
  }

  equals(other: ApiKeyProjectEndpointId): boolean {
    return this.value === other.value;
  }
}