import { InvalidUsageLogErrorCodeError } from './error';

const MAX_ERROR_CODE_LENGTH = 128;

export class UsageLogErrorCode {
  private constructor(private readonly value: string | null) {}

  static empty(): UsageLogErrorCode {
    return new UsageLogErrorCode(null);
  }

  static create(value: string | null | undefined): UsageLogErrorCode {
    if (value === undefined || value === null || value === '') {
      return UsageLogErrorCode.empty();
    }

    const normalized = value.trim().toUpperCase();

    if (
      !normalized ||
      normalized.length > MAX_ERROR_CODE_LENGTH ||
      !/^[A-Z0-9_]+$/.test(normalized)
    ) {
      throw new InvalidUsageLogErrorCodeError(value);
    }

    return new UsageLogErrorCode(normalized);
  }

  toNullableString(): string | null {
    return this.value;
  }
}