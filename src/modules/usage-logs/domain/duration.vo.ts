import { InvalidUsageLogDurationError } from './error';

export class UsageLogDurationMs {
  private constructor(private readonly value: number) {}

  static create(value: number): UsageLogDurationMs {
    if (!Number.isSafeInteger(value) || value < 0) {
      throw new InvalidUsageLogDurationError(value);
    }

    return new UsageLogDurationMs(value);
  }

  toNumber(): number {
    return this.value;
  }
}