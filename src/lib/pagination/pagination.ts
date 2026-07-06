import { RawPaginationQuery } from './common/types';
import { PaginationStrategy } from './common/types';
import {
  CursorPaginationConfig,
  PreparedCursorPagination,
} from './cursor/types';
import { prepareCursorPagination } from './cursor/pagination';
import { InvalidPaginationStrategyError } from './error';
import {
  OffsetPaginationConfig,
  PreparedOffsetPagination,
} from './offset/types';
import { prepareOffsetPagination } from './offset/pagination';

type PreparePaginationConfig = {
  defaultStrategy?: PaginationStrategy;
  offset?: OffsetPaginationConfig;
  cursor?: CursorPaginationConfig;
};

export type PreparedPagination =
  | PreparedOffsetPagination
  | PreparedCursorPagination;

export function preparePagination(
  query: RawPaginationQuery,
  config: PreparePaginationConfig = {},
): PreparedPagination {
  const hasOffsetParams = hasAnyPresentKey(query, ['page', 'limit']);
  const hasCursorParams = hasAnyPresentKey(query, [
    'cursor',
    'take',
    'direction',
  ]);

  if (hasOffsetParams && hasCursorParams) {
    throw new InvalidPaginationStrategyError();
  }

  if (hasCursorParams) {
    return prepareCursorPagination(query, config.cursor);
  }

  if (hasOffsetParams) {
    return prepareOffsetPagination(query, config.offset);
  }

  if (config.defaultStrategy === PaginationStrategy.CURSOR) {
    return prepareCursorPagination(query, config.cursor);
  }

  return prepareOffsetPagination(query, config.offset);
}

function hasAnyPresentKey(
  query: RawPaginationQuery,
  keys: string[],
): boolean {
  return keys.some((key) => {
    const value = query[key];

    return value !== undefined && value !== null;
  });
}