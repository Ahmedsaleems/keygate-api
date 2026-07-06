import { PaginationStrategy } from '../common/types';
import { parsePositiveInteger } from '../common/positive-integer-parser';
import { InvalidPaginationCursorError } from '../error';
import { InvalidPaginationTakeError } from '../error';
import {
  CursorPaginationDirection,
  parseCursorPaginationDirection,
} from './direction-parser';
import { CursorPaginationCodec } from './codec';
import {
  BuildCursorPaginatedResponseInput,
  CursorPaginatedResponse,
  CursorPaginationConfig,
  CursorPaginationPayload,
  CursorPaginationQuery,
  PreparedCursorPagination,
} from './types';

const DEFAULT_TAKE = 10;
const DEFAULT_MAX_TAKE = 100;

export function prepareCursorPagination(
  query: CursorPaginationQuery,
  config: CursorPaginationConfig = {},
): PreparedCursorPagination {
  const take = parsePositiveInteger({
    value: query.take,
    defaultValue: config.defaultTake ?? DEFAULT_TAKE,
    maxValue: config.maxTake ?? DEFAULT_MAX_TAKE,
    errorFactory: (value) => new InvalidPaginationTakeError(value),
  });

  const direction = parseCursorPaginationDirection(
    query.direction,
    config.defaultDirection ?? CursorPaginationDirection.AFTER,
  );

  const cursorPayload = parseCursor(query.cursor);
  const lookAhead = config.lookAhead ?? true;
  const dbTake = lookAhead ? take + 1 : take;

  return {
    strategy: PaginationStrategy.CURSOR,
    dbArgs: {
      take: dbTake,
      skip: cursorPayload ? 1 : 0,
      ...(cursorPayload ? { cursor: cursorPayload } : {}),
    },
    context: {
      take,
      direction,
      cursor:
        typeof query.cursor === 'string' && query.cursor.trim()
          ? query.cursor.trim()
          : null,
      cursorPayload,
      lookAhead,
    },
  };
}

export function buildCursorPaginatedResponse<TData>(
  input: BuildCursorPaginatedResponseInput<TData>,
): CursorPaginatedResponse<TData> {
  const hasLookAheadItem =
    input.context.lookAhead && input.data.length > input.context.take;

  const data = hasLookAheadItem
    ? input.data.slice(0, input.context.take)
    : [...input.data];

  const firstItem = data.at(0);
  const lastItem = data.at(-1);

  return {
    data,
    meta: {
      type: PaginationStrategy.CURSOR,
      take: input.context.take,
      hasPreviousPage: calculateHasPreviousPage(
        input.context.direction,
        Boolean(input.context.cursor),
        hasLookAheadItem,
      ),
      hasNextPage: calculateHasNextPage(
        input.context.direction,
        Boolean(input.context.cursor),
        hasLookAheadItem,
      ),
      startCursor: firstItem
        ? CursorPaginationCodec.encode(input.getCursorPayload(firstItem))
        : null,
      endCursor: lastItem
        ? CursorPaginationCodec.encode(input.getCursorPayload(lastItem))
        : null,
    },
  };
}

function parseCursor(
  value: unknown,
): CursorPaginationPayload | null {
  if (value === undefined || value === null) {
    return null;
  }

  if (typeof value !== 'string') {
    throw new InvalidPaginationCursorError();
  }

  const trimmed = value.trim();

  if (!trimmed) {
    throw new InvalidPaginationCursorError();
  }

  return CursorPaginationCodec.decode(trimmed);
}

function calculateHasPreviousPage(
  direction: CursorPaginationDirection,
  hasCursor: boolean,
  hasLookAheadItem: boolean,
): boolean {
  if (direction === CursorPaginationDirection.BEFORE) {
    return hasLookAheadItem;
  }

  return hasCursor;
}

function calculateHasNextPage(
  direction: CursorPaginationDirection,
  hasCursor: boolean,
  hasLookAheadItem: boolean,
): boolean {
  if (direction === CursorPaginationDirection.BEFORE) {
    return hasCursor;
  }

  return hasLookAheadItem;
}