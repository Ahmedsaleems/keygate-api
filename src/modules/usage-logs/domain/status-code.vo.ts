import { InvalidUsageLogStatusCodeError } from './error';

export class UsageLogStatusCode {
  private constructor(private readonly value: number) {}

  static create(value: number): UsageLogStatusCode {
    if (!Number.isSafeInteger(value) || value < 100 || value > 599) {
      throw new InvalidUsageLogStatusCodeError(value);
    }

    return new UsageLogStatusCode(value);
  }

  toNumber(): number {
    return this.value;
  }
}