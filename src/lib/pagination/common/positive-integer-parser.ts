type PositiveIntegerParserOptions = {
  value: unknown;
  defaultValue: number;
  maxValue?: number;
  errorFactory: (value: unknown) => Error;
};

export function parsePositiveInteger(
  options: PositiveIntegerParserOptions,
): number {
  const { value, defaultValue, maxValue, errorFactory } = options;

  assertPositiveSafeInteger(defaultValue, errorFactory);

  if (maxValue !== undefined) {
    assertPositiveSafeInteger(maxValue, errorFactory);

    if (defaultValue > maxValue) {
      throw errorFactory(defaultValue);
    }
  }

  if (value === undefined || value === null) {
    return defaultValue;
  }

  const parsed = parseInteger(value, errorFactory);

  if (parsed < 1) {
    throw errorFactory(value);
  }

  if (maxValue !== undefined && parsed > maxValue) {
    return maxValue;
  }

  return parsed;
}

function parseInteger(
  value: unknown,
  errorFactory: (value: unknown) => Error,
): number {
  if (typeof value === 'number') {
    if (!Number.isSafeInteger(value)) {
      throw errorFactory(value);
    }

    return value;
  }

  if (typeof value !== 'string') {
    throw errorFactory(value);
  }

  const trimmed = value.trim();

  if (!/^\d+$/.test(trimmed)) {
    throw errorFactory(value);
  }

  const parsed = Number(trimmed);

  if (!Number.isSafeInteger(parsed)) {
    throw errorFactory(value);
  }

  return parsed;
}

function assertPositiveSafeInteger(
  value: number,
  errorFactory: (value: unknown) => Error,
): void {
  if (!Number.isSafeInteger(value) || value < 1) {
    throw errorFactory(value);
  }
}
