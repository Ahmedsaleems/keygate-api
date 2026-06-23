import { randomUUID } from 'node:crypto';
import { InvalidApiKeyEndpointPermissionIdError } from './error';

export class ApiKeyEndpointPermissionId {
  private constructor(private readonly value: string) {}

  static create(): ApiKeyEndpointPermissionId {
    return new ApiKeyEndpointPermissionId(randomUUID());
  }

  static fromString(value: string): ApiKeyEndpointPermissionId {
    const normalized = value.trim();

    if (!normalized) {
      throw new InvalidApiKeyEndpointPermissionIdError(value);
    }

    return new ApiKeyEndpointPermissionId(normalized);
  }

  toString(): string {
    return this.value;
  }

  equals(other: ApiKeyEndpointPermissionId): boolean {
    return this.value === other.value;
  }
}