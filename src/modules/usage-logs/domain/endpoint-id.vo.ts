import { InvalidUsageLogReferenceIdError } from './error';

export class UsageLogEndpointId {
  private constructor(private readonly value: string) {}

  static fromString(value: string): UsageLogEndpointId {
    const normalized = value.trim();

    if (!normalized) {
      throw new InvalidUsageLogReferenceIdError('endpointId', value);
    }

    return new UsageLogEndpointId(normalized);
  }

  toString(): string {
    return this.value;
  }
}