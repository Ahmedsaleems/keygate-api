import { InvalidUsageLogQueryStringError } from './error';

const MAX_QUERY_STRING_LENGTH = 4096;

export class UsageLogQueryString {
  private constructor(private readonly value: string | null) {}

  static empty(): UsageLogQueryString {
    return new UsageLogQueryString(null);
  }

  static create(value: string | null | undefined): UsageLogQueryString {
    if (value === undefined || value === null || value === '') {
      return UsageLogQueryString.empty();
    }

    const normalized = value.startsWith('?') ? value.slice(1) : value;

    if (!normalized) {
      return UsageLogQueryString.empty();
    }

    if (
      normalized.length > MAX_QUERY_STRING_LENGTH ||
      normalized.includes('#')
    ) {
      throw new InvalidUsageLogQueryStringError();
    }

    return new UsageLogQueryString(normalized);
  }

  toNullableString(): string | null {
    return this.value;
  }
}