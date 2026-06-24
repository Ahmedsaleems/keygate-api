import { ApplicationError } from '../../../lib/errors/application.error';

export class GatewayApiKeyMissingError extends ApplicationError {
  readonly code = 'GATEWAY_API_KEY_MISSING';

  constructor() {
    super('API key is required.');
  }
}

export class GatewayApiKeyInvalidError extends ApplicationError {
  readonly code = 'GATEWAY_API_KEY_INVALID';

  constructor() {
    super('API key is invalid.');
  }
}

export class GatewayApiKeyRevokedError extends ApplicationError {
  readonly code = 'GATEWAY_API_KEY_REVOKED';

  constructor() {
    super('API key has been revoked.');
  }
}

export class GatewayEndpointNotFoundError extends ApplicationError {
  readonly code = 'GATEWAY_ENDPOINT_NOT_FOUND';

  constructor() {
    super('Gateway endpoint was not found.');
  }
}

export class GatewayEndpointDisabledError extends ApplicationError {
  readonly code = 'GATEWAY_ENDPOINT_DISABLED';

  constructor() {
    super('Gateway endpoint is disabled.');
  }
}

export class GatewayEndpointAccessDeniedError extends ApplicationError {
  readonly code = 'GATEWAY_ENDPOINT_ACCESS_DENIED';

  constructor() {
    super('API key does not have access to this endpoint.');
  }
}

export class GatewayUpstreamRequestFailedError extends ApplicationError {
  readonly code = 'GATEWAY_UPSTREAM_REQUEST_FAILED';

  constructor(message = 'Gateway upstream request failed.') {
    super(message);
  }
}