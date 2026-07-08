import { InvalidUsageLogReferenceIdError } from './error';

export class UsageLogProjectId {
  private constructor(private readonly value: string) {}

  static fromString(value: string): UsageLogProjectId {
    const normalized = value.trim();

    if (!normalized) {
      throw new InvalidUsageLogReferenceIdError('projectId', value);
    }

    return new UsageLogProjectId(normalized);
  }

  toString(): string {
    return this.value;
  }
}