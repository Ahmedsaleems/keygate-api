import { InvalidApiKeyStatusError } from './error';

export enum ApiKeyStatusValue {
  ACTIVE = 'ACTIVE',
  REVOKED = 'REVOKED',
}

export class ApiKeyStatus {
  private constructor(private readonly value: ApiKeyStatusValue) {}

  static active(): ApiKeyStatus {
    return new ApiKeyStatus(ApiKeyStatusValue.ACTIVE);
  }

  static revoked(): ApiKeyStatus {
    return new ApiKeyStatus(ApiKeyStatusValue.REVOKED);
  }

  static create(value: string): ApiKeyStatus {
    const normalized = value.trim().toUpperCase();

    if (!this.isAllowed(normalized)) {
      throw new InvalidApiKeyStatusError(value);
    }

    return new ApiKeyStatus(normalized);
  }

  private static isAllowed(value: string): value is ApiKeyStatusValue {
    return Object.values(ApiKeyStatusValue).includes(value as ApiKeyStatusValue);
  }

  isActive(): boolean {
    return this.value === ApiKeyStatusValue.ACTIVE;
  }

  isRevoked(): boolean {
    return this.value === ApiKeyStatusValue.REVOKED;
  }

  toString(): ApiKeyStatusValue {
    return this.value;
  }

  equals(other: ApiKeyStatus): boolean {
    return this.value === other.value;
  }
}