import { InvalidUsageLogRequestMethodError } from './error';

export enum UsageLogRequestMethodValue {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

export class UsageLogRequestMethod {
  private constructor(private readonly value: UsageLogRequestMethodValue) {}

  static create(value: string): UsageLogRequestMethod {
    const normalized = value.trim().toUpperCase();

    if (!this.isValid(normalized)) {
      throw new InvalidUsageLogRequestMethodError(value);
    }

    return new UsageLogRequestMethod(normalized);
  }

  private static isValid(value: string): value is UsageLogRequestMethodValue {
    return Object.values(UsageLogRequestMethodValue).includes(
      value as UsageLogRequestMethodValue,
    );
  }

  toString(): UsageLogRequestMethodValue {
    return this.value;
  }
}