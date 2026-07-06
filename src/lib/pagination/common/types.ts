export enum PaginationStrategy {
  OFFSET = 'offset',
  CURSOR = 'cursor',
}

export type PaginatedResponse<TData, TMeta> = {
  data: TData[];
  meta: TMeta;
};

export type RawPaginationQuery = Record<string, unknown>;