import { PaginatedResponse } from '../common/types';
import { PaginationStrategy } from '../common/types';
import { CursorPaginationDirection } from './direction-parser';

export type CursorPaginationPayload = Record<
  string,
  string | number | boolean | null
>;

export type CursorPaginationQuery = {
  cursor?: unknown;
  take?: unknown;
  direction?: unknown;
};

export type CursorPaginationConfig = {
  defaultTake?: number;
  maxTake?: number;
  defaultDirection?: CursorPaginationDirection;
  lookAhead?: boolean;
};

export type CursorPaginationDbArgs = {
  take: number;
  skip: number;
  cursor?: CursorPaginationPayload;
};

export type CursorPaginationContext = {
  take: number;
  direction: CursorPaginationDirection;
  cursor: string | null;
  cursorPayload: CursorPaginationPayload | null;
  lookAhead: boolean;
};

export type PreparedCursorPagination = {
  strategy: PaginationStrategy.CURSOR;
  dbArgs: CursorPaginationDbArgs;
  context: CursorPaginationContext;
};

export type CursorPaginationMeta = {
  type: PaginationStrategy.CURSOR;
  take: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
  startCursor: string | null;
  endCursor: string | null;
};

export type CursorPaginatedResponse<TData> = PaginatedResponse<
  TData,
  CursorPaginationMeta
>;

export type BuildCursorPaginatedResponseInput<TData> = {
  data: TData[];
  context: CursorPaginationContext;
  getCursorPayload: (item: TData) => CursorPaginationPayload;
};