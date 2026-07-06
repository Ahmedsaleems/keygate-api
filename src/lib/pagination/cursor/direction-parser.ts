import { InvalidPaginationDirectionError } from '../error';

export enum CursorPaginationDirection {
  AFTER = 'after',
  BEFORE = 'before',
}

export function parseCursorPaginationDirection(
  value: unknown,
  defaultValue: CursorPaginationDirection,
): CursorPaginationDirection {
  if (value === undefined || value === null) {
    return defaultValue;
  }

  if (typeof value !== 'string') {
    throw new InvalidPaginationDirectionError(value);
  }

  const normalized = value.trim().toLowerCase();

  if (normalized === CursorPaginationDirection.AFTER) {
    return CursorPaginationDirection.AFTER;
  }

  if (normalized === CursorPaginationDirection.BEFORE) {
    return CursorPaginationDirection.BEFORE;
  }

  throw new InvalidPaginationDirectionError(value);
}