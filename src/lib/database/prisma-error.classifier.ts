import { Prisma } from '../prisma/generated';

const DATABASE_UNAVAILABLE_ERROR_CODES = new Set([
  'P1001',
  'P1002',
  'P1008',
  'P1011',
  'P1017',
  'P2024',
  'P2034',
  'P2037',
]);

export class PrismaErrorClassifier {
  static isUniqueConstraintViolation(
    error: unknown,
    expectedFields: readonly string[],
  ): boolean {
    if (
      !(error instanceof Prisma.PrismaClientKnownRequestError) ||
      error.code !== 'P2002'
    ) {
      return false;
    }

    const actualFields = this.extractConstraintFields(error.meta);

    return this.constraintFieldsMatch(actualFields, expectedFields);
  }

  static isForeignKeyConstraintViolation(error: unknown): boolean {
    return (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === 'P2003'
    );
  }

  static isRecordNotFound(error: unknown): boolean {
    return (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === 'P2025'
    );
  }

  static isDatabaseUnavailable(error: unknown): boolean {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      return DATABASE_UNAVAILABLE_ERROR_CODES.has(error.code);
    }

    if (error instanceof Prisma.PrismaClientInitializationError) {
      return (
        typeof error.errorCode === 'string' &&
        DATABASE_UNAVAILABLE_ERROR_CODES.has(error.errorCode)
      );
    }

    return false;
  }

  private static extractConstraintFields(
    meta: Record<string, unknown> | undefined,
  ): string[] {
    if (!meta) {
      return [];
    }

    if (Array.isArray(meta.target)) {
      return meta.target.filter(
        (field): field is string => typeof field === 'string',
      );
    }

    const driverAdapterError = meta.driverAdapterError;

    if (!this.isRecord(driverAdapterError)) {
      return [];
    }

    const cause = driverAdapterError.cause;

    if (!this.isRecord(cause)) {
      return [];
    }

    const constraint = cause.constraint;

    if (!this.isRecord(constraint) || !Array.isArray(constraint.fields)) {
      return [];
    }

    return constraint.fields.filter(
      (field): field is string => typeof field === 'string',
    );
  }

  private static constraintFieldsMatch(
    actualFields: readonly string[],
    expectedFields: readonly string[],
  ): boolean {
    const normalize = (field: string): string =>
      field.replaceAll(/[^a-zA-Z0-9]/g, '').toLowerCase();

    const actual = actualFields.map(normalize).sort();
    const expected = expectedFields.map(normalize).sort();

    return (
      actual.length === expected.length &&
      actual.every((field, index) => field === expected[index])
    );
  }

  private static isRecord(value: unknown): value is Record<string, unknown> {
    return value !== null && typeof value === 'object' && !Array.isArray(value);
  }
}
