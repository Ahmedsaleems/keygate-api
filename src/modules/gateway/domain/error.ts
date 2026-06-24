import { ApplicationError } from '../../../lib/errors/application.error';

export class InvalidGatewayRawApiKeyError extends ApplicationError {
  readonly code = 'INVALID_GATEWAY_RAW_API_KEY';

  constructor() {
    super('Invalid gateway raw API key.');
  }
}

export class InvalidGatewayHttpMethodError extends ApplicationError {
  readonly code = 'INVALID_GATEWAY_HTTP_METHOD';

  constructor(value: string) {
    super('Invalid gateway HTTP method.', {
      value,
      allowedMethods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    });
  }
}

export class InvalidGatewayRequestPathError extends ApplicationError {
  readonly code = 'INVALID_GATEWAY_REQUEST_PATH';

  constructor(value: string) {
    super('Invalid gateway request path.', { value });
  }
}

export class InvalidGatewayQueryStringError extends ApplicationError {
  readonly code = 'INVALID_GATEWAY_QUERY_STRING';

  constructor(value: string) {
    super('Invalid gateway query string.', { value });
  }
}

export class InvalidGatewayUpstreamUrlError extends ApplicationError {
  readonly code = 'INVALID_GATEWAY_UPSTREAM_URL';

  constructor(value: string) {
    super('Invalid gateway upstream URL.', { value });
  }
}

