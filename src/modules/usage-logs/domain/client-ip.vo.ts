import { InvalidUsageLogClientIpError } from './error';

const MAX_CLIENT_IP_LENGTH = 128;

export class UsageLogClientIp {
  private constructor(private readonly value: string | null) {}

  static empty(): UsageLogClientIp {
    return new UsageLogClientIp(null);
  }

  static create(value: string | null | undefined): UsageLogClientIp {
    if (value === undefined || value === null || value === '') {
      return UsageLogClientIp.empty();
    }

    const normalized = value.trim();

    if (!normalized || normalized.length > MAX_CLIENT_IP_LENGTH) {
      throw new InvalidUsageLogClientIpError(value);
    }

    return new UsageLogClientIp(normalized);
  }

  toNullableString(): string | null {
    return this.value;
  }
}