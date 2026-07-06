import { PaginationStrategy } from '../common/types';
import { parsePositiveInteger } from '../common/positive-integer-parser';
import { InvalidPaginationLimitError } from '../error';
import { InvalidPaginationPageError } from '../error';
import {
  BuildOffsetPaginatedResponseInput,
  OffsetPaginatedResponse,
  OffsetPaginationConfig,
  OffsetPaginationQuery,
  PreparedOffsetPagination,
} from './types';

const DEFAULT_PAGE = 1;
const DEFAULT_LIMIT = 10;
const DEFAULT_MAX_LIMIT = 100;

export function prepareOffsetPagination(
  query: OffsetPaginationQuery,
  config: OffsetPaginationConfig = {},
): PreparedOffsetPagination {
  const page = parsePositiveInteger({
    value: query.page,
    defaultValue: config.defaultPage ?? DEFAULT_PAGE,
    errorFactory: (value) => new InvalidPaginationPageError(value),
  });

  const limit = parsePositiveInteger({
    value: query.limit,
    defaultValue: config.defaultLimit ?? DEFAULT_LIMIT,
    maxValue: config.maxLimit ?? DEFAULT_MAX_LIMIT,
    errorFactory: (value) => new InvalidPaginationLimitError(value),
  });

  return {
    strategy: PaginationStrategy.OFFSET,
    dbArgs: {
      skip: (page - 1) * limit,
      take: limit,
    },
    context: {
      page,
      limit,
    },
  };
}

export function buildOffsetPaginatedResponse<TData>(
  input: BuildOffsetPaginatedResponseInput<TData>,
): OffsetPaginatedResponse<TData> {
  const itemCount = input.data.length;
  const totalItems = input.totalItems;
  const totalPages = totalItems === 0
    ? 0
    : Math.ceil(totalItems / input.context.limit);

  return {
    data: [...input.data],
    meta: {
      type: PaginationStrategy.OFFSET,
      itemCount,
      totalItems,
      itemsPerPage: input.context.limit,
      totalPages,
      currentPage: input.context.page,
      hasPreviousPage: input.context.page > 1,
      hasNextPage:
        totalPages > 0 && input.context.page < totalPages,
    },
  };
}