import { ApplicationError } from '../../../lib/errors/application.error';

export class InvalidUsageLogIdError extends ApplicationError {
  readonly code = 'INVALID_USAGE_LOG_ID';

  constructor(value: string) {
    super('Invalid usage log id.', { value });
  }
}

export class InvalidUsageLogReferenceIdError extends ApplicationError {
  readonly code = 'INVALID_USAGE_LOG_REFERENCE_ID';

  constructor(referenceName: string, value: string) {
    super('Invalid usage log reference id.', {
      referenceName,
      value,
    });
  }
}

export class InvalidUsageLogRequestMethodError extends ApplicationError {
  readonly code = 'INVALID_USAGE_LOG_REQUEST_METHOD';

  constructor(value: string) {
    super('Invalid usage log request method.', { value });
  }
}

export class InvalidUsageLogRequestPathError extends ApplicationError {
  readonly code = 'INVALID_USAGE_LOG_REQUEST_PATH';

  constructor(value: string) {
    super('Invalid usage log request path.', { value });
  }
}

export class InvalidUsageLogQueryStringError extends ApplicationError {
  readonly code = 'INVALID_USAGE_LOG_QUERY_STRING';

  constructor() {
    super('Invalid usage log query string.');
  }
}

export class InvalidUsageLogOutcomeError extends ApplicationError {
  readonly code = 'INVALID_USAGE_LOG_OUTCOME';

  constructor(value: string) {
    super('Invalid usage log outcome.', { value });
  }
}

export class InvalidUsageLogStatusCodeError extends ApplicationError {
  readonly code = 'INVALID_USAGE_LOG_STATUS_CODE';

  constructor(value: number) {
    super('Invalid usage log status code.', { value });
  }
}

export class InvalidUsageLogDurationError extends ApplicationError {
  readonly code = 'INVALID_USAGE_LOG_DURATION';

  constructor(value: number) {
    super('Invalid usage log duration.', { value });
  }
}

export class InvalidUsageLogErrorCodeError extends ApplicationError {
  readonly code = 'INVALID_USAGE_LOG_ERROR_CODE';

  constructor(value: string) {
    super('Invalid usage log error code.', { value });
  }
}

export class InvalidUsageLogClientIpError extends ApplicationError {
  readonly code = 'INVALID_USAGE_LOG_CLIENT_IP';

  constructor(value: string) {
    super('Invalid usage log client IP.', { value });
  }
}

export class InvalidUsageLogUserAgentError extends ApplicationError {
  readonly code = 'INVALID_USAGE_LOG_USER_AGENT';

  constructor(value: string) {
    super('Invalid usage log user agent.', { value });
  }
}