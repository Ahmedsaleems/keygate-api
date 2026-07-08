import { InvalidUsageLogUserAgentError } from './error';

const MAX_USER_AGENT_LENGTH = 512;

export class UsageLogUserAgent {
  private constructor(private readonly value: string | null) {}

  static empty(): UsageLogUserAgent {
    return new UsageLogUserAgent(null);
  }

  static create(value: string | null | undefined): UsageLogUserAgent {
    if (value === undefined || value === null || value === '') {
      return UsageLogUserAgent.empty();
    }

    const normalized = value.trim();

    if (!normalized || normalized.length > MAX_USER_AGENT_LENGTH) {
      throw new InvalidUsageLogUserAgentError(value);
    }

    return new UsageLogUserAgent(normalized);
  }

  toNullableString(): string | null {
    return this.value;
  }
}