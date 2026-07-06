export { PaginationStrategy } from './common/types';
export type { PaginatedResponse } from './common/types';
export type { RawPaginationQuery } from './common/types';

export {
  preparePagination,
  type PreparedPagination,
} from './pagination';

export {
  prepareOffsetPagination,
  buildOffsetPaginatedResponse,
} from './offset/pagination';

export type {
  BuildOffsetPaginatedResponseInput,
  OffsetPaginatedResponse,
  OffsetPaginationConfig,
  OffsetPaginationContext,
  OffsetPaginationDbArgs,
  OffsetPaginationMeta,
  OffsetPaginationQuery,
  PreparedOffsetPagination,
} from './offset/types';

export {
  CursorPaginationDirection,
  parseCursorPaginationDirection,
} from './cursor/direction-parser';

export { CursorPaginationCodec } from './cursor/codec';

export {
  prepareCursorPagination,
  buildCursorPaginatedResponse,
} from './cursor/pagination';

export type {
  BuildCursorPaginatedResponseInput,
  CursorPaginatedResponse,
  CursorPaginationConfig,
  CursorPaginationContext,
  CursorPaginationPayload,
  CursorPaginationDbArgs,
  CursorPaginationMeta,
  CursorPaginationQuery,
  PreparedCursorPagination,
} from './cursor/types';

export { InvalidPaginationStrategyError } from './error';
export { InvalidPaginationLimitError } from './error';
export { InvalidPaginationTakeError } from './error';
export { InvalidPaginationPageError } from './error';
export { InvalidPaginationCursorError } from './error';
export { InvalidPaginationDirectionError } from './error';