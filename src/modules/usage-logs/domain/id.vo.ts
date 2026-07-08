import { InvalidUsageLogIdError } from './error';

export class UsageLogId {
  private constructor(private readonly value: string) {}

  static fromString(value: string): UsageLogId {
    const normalized = value.trim();

    if (!normalized) {
      throw new InvalidUsageLogIdError(value);
    }

    return new UsageLogId(normalized);
  }

  toString(): string {
    return this.value;
  }

  equals(other: UsageLogId): boolean {
    return this.value === other.value;
  }
}