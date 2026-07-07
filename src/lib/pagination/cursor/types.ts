import { PaginatedResponse } from '../common/types';
import { PaginationStrategy } from '../common/types';
import { CursorPaginationDirection } from './direction-parser';

export type CursorPaginationPayload = object;

export type CursorPaginationPayloadValidator<
  TPayload extends CursorPaginationPayload,
> = (value: unknown) => value is TPayload;

export type CursorPaginationQuery = {
  cursor?: unknown;
  take?: unknown;
  direction?: unknown;
};

export type CursorPaginationConfig<TPayload extends CursorPaginationPayload> = {
  cursorPayloadValidator: CursorPaginationPayloadValidator<TPayload>;
  defaultTake?: number;
  maxTake?: number;
  defaultDirection?: CursorPaginationDirection;
  lookAhead?: boolean;
};

export type CursorPaginationDbArgs<TPayload extends CursorPaginationPayload> = {
  take: number;
  skip: number;
  cursor?: TPayload;
};

export type CursorPaginationContext<TPayload extends CursorPaginationPayload> =
  {
    take: number;
    direction: CursorPaginationDirection;
    cursor: string | null;
    cursorPayload: TPayload | null;
    lookAhead: boolean;
  };

export type PreparedCursorPagination<TPayload extends CursorPaginationPayload> =
  {
    strategy: PaginationStrategy.CURSOR;
    dbArgs: CursorPaginationDbArgs<TPayload>;
    context: CursorPaginationContext<TPayload>;
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

export type BuildCursorPaginatedResponseInput<
  TData,
  TPayload extends CursorPaginationPayload,
> = {
  data: TData[];
  context: CursorPaginationContext<TPayload>;
  getCursorPayload: (item: TData) => TPayload;
};
