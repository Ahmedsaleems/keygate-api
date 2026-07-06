import { PaginatedResponse } from '../common/types';
import { PaginationStrategy } from '../common/types';

export type OffsetPaginationQuery = {
  page?: unknown;
  limit?: unknown;
};

export type OffsetPaginationConfig = {
  defaultPage?: number;
  defaultLimit?: number;
  maxLimit?: number;
};

export type OffsetPaginationDbArgs = {
  skip: number;
  take: number;
};

export type OffsetPaginationContext = {
  page: number;
  limit: number;
};

export type PreparedOffsetPagination = {
  strategy: PaginationStrategy.OFFSET;
  dbArgs: OffsetPaginationDbArgs;
  context: OffsetPaginationContext;
};

export type OffsetPaginationMeta = {
  type: PaginationStrategy.OFFSET;
  itemCount: number;
  totalItems: number;
  itemsPerPage: number;
  totalPages: number;
  currentPage: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
};

export type OffsetPaginatedResponse<TData> = PaginatedResponse<
  TData,
  OffsetPaginationMeta
>;

export type BuildOffsetPaginatedResponseInput<TData> = {
  data: TData[];
  totalItems: number;
  context: OffsetPaginationContext;
};