import { RawPaginationQuery } from './common/types';
import { PaginationStrategy } from './common/types';
import {
  CursorPaginationConfig,
  CursorPaginationPayload,
  PreparedCursorPagination,
} from './cursor/types';
import { prepareCursorPagination } from './cursor/pagination';
import { InvalidPaginationStrategyError } from './error';
import { UnsupportedCursorPaginationError } from './error';
import {
  OffsetPaginationConfig,
  PreparedOffsetPagination,
} from './offset/types';
import { prepareOffsetPagination } from './offset/pagination';

export type PreparePaginationConfig<
  TPayload extends CursorPaginationPayload = CursorPaginationPayload,
> = {
  defaultStrategy?: PaginationStrategy;
  offset?: OffsetPaginationConfig;
  cursor?: CursorPaginationConfig<TPayload>;
};

export type PreparedPagination<
  TPayload extends CursorPaginationPayload = CursorPaginationPayload,
> = PreparedOffsetPagination | PreparedCursorPagination<TPayload>;

export function preparePagination<
  TPayload extends CursorPaginationPayload = CursorPaginationPayload,
>(
  query: RawPaginationQuery,
  config: PreparePaginationConfig<TPayload> = {},
): PreparedPagination<TPayload> {
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
    return prepareConfiguredCursorPagination(query, config);
  }

  if (hasOffsetParams) {
    return prepareOffsetPagination(query, config.offset);
  }

  if (config.defaultStrategy === PaginationStrategy.CURSOR) {
    return prepareConfiguredCursorPagination(query, config);
  }

  return prepareOffsetPagination(query, config.offset);
}

function prepareConfiguredCursorPagination<
  TPayload extends CursorPaginationPayload,
>(
  query: RawPaginationQuery,
  config: PreparePaginationConfig<TPayload>,
): PreparedCursorPagination<TPayload> {
  if (!config.cursor) {
    throw new UnsupportedCursorPaginationError();
  }

  return prepareCursorPagination(query, config.cursor);
}

function hasAnyPresentKey(query: RawPaginationQuery, keys: string[]): boolean {
  return keys.some((key) => {
    const value = query[key];

    return value !== undefined && value !== null;
  });
}
