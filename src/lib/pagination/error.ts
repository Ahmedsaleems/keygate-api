import { ApplicationError } from '../errors/application.error';

export class InvalidPaginationStrategyError extends ApplicationError {
  readonly code = 'INVALID_PAGINATION_STRATEGY';

  constructor() {
    super('Invalid pagination strategy. Offset and cursor pagination parameters cannot be mixed.');
  }
}

export class InvalidPaginationLimitError extends ApplicationError {
  readonly code = 'INVALID_PAGINATION_LIMIT';

  constructor(value: unknown) {
    super('Invalid pagination limit.', { value });
  }
}

export class InvalidPaginationTakeError extends ApplicationError {
  readonly code = 'INVALID_PAGINATION_TAKE';

  constructor(value: unknown) {
    super('Invalid pagination take value.', { value });
  }
}

export class InvalidPaginationPageError extends ApplicationError {
  readonly code = 'INVALID_PAGINATION_PAGE';

  constructor(value: unknown) {
    super('Invalid pagination page.', { value });
  }
}


export class InvalidPaginationCursorError extends ApplicationError {
  readonly code = 'INVALID_PAGINATION_CURSOR';

  constructor() {
    super('Invalid pagination cursor.');
  }
}

export class InvalidPaginationDirectionError extends ApplicationError {
  readonly code = 'INVALID_PAGINATION_DIRECTION';

  constructor(value: unknown) {
    super('Invalid pagination direction.', {
      value,
      allowedDirections: ['after', 'before'],
    });
  }
}