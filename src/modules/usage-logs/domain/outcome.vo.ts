import { InvalidUsageLogOutcomeError } from './error';

export enum UsageLogOutcomeValue {
  SUCCESS = 'SUCCESS',
  API_KEY_MISSING = 'API_KEY_MISSING',
  API_KEY_INVALID = 'API_KEY_INVALID',
  API_KEY_REVOKED = 'API_KEY_REVOKED',
  ENDPOINT_NOT_FOUND = 'ENDPOINT_NOT_FOUND',
  ENDPOINT_DISABLED = 'ENDPOINT_DISABLED',
  PERMISSION_DENIED = 'PERMISSION_DENIED',
  UPSTREAM_ERROR = 'UPSTREAM_ERROR',
  GATEWAY_VALIDATION_ERROR = 'GATEWAY_VALIDATION_ERROR',
  UNKNOWN_ERROR = 'UNKNOWN_ERROR',
}

export class UsageLogOutcome {
  private constructor(private readonly value: UsageLogOutcomeValue) {}

  static create(value: string): UsageLogOutcome {
    const normalized = value.trim().toUpperCase();

    if (!this.isValid(normalized)) {
      throw new InvalidUsageLogOutcomeError(value);
    }

    return new UsageLogOutcome(normalized);
  }

  static success(): UsageLogOutcome {
    return new UsageLogOutcome(UsageLogOutcomeValue.SUCCESS);
  }

  private static isValid(value: string): value is UsageLogOutcomeValue {
    return Object.values(UsageLogOutcomeValue).includes(
      value as UsageLogOutcomeValue,
    );
  }

  toString(): UsageLogOutcomeValue {
    return this.value;
  }
}