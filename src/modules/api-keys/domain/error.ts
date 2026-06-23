import { ApplicationError } from 'src/lib/errors/application.error';

export class InvalidApiKeyIdError extends ApplicationError {
  readonly code = 'INVALID_API_KEY_ID';

  constructor(value: string) {
    super('Invalid API key id.', { value });
  }
}

export class InvalidApiKeyProjectIdError extends ApplicationError {
  readonly code = 'INVALID_API_KEY_PROJECT_ID';

  constructor(value: string) {
    super('Invalid API key project id.', { value });
  }
}

export class InvalidApiKeyProjectEndpointIdError extends ApplicationError {
  readonly code = 'INVALID_API_KEY_PROJECT_ENDPOINT_ID';

  constructor(value: string) {
    super('Invalid API key project endpoint id.', { value });
  }
}

export class InvalidApiKeyNameError extends ApplicationError {
  readonly code = 'INVALID_API_KEY_NAME';

  constructor(value: string) {
    super('Invalid API key name.', {
      value,
      constraints: {
        minLength: 3,
        maxLength: 80,
      },
    });
  }
}

export class InvalidApiKeyPrefixError extends ApplicationError {
  readonly code = 'INVALID_API_KEY_PREFIX';

  constructor(value: string) {
    super('Invalid API key prefix.', {
      value,
      constraints: {
        minLength: 1,
        maxLength: 30,
      },
    });
  }
}

export class InvalidApiKeyHashError extends ApplicationError {
  readonly code = 'INVALID_API_KEY_HASH';

  constructor() {
    super('Invalid API key hash.');
  }
}

export class InvalidApiKeyStatusError extends ApplicationError {
  readonly code = 'INVALID_API_KEY_STATUS';

  constructor(value: string) {
    super('Invalid API key status.', {
      value,
      allowedStatuses: ['ACTIVE', 'REVOKED'],
    });
  }
}

export class InvalidApiKeyEndpointPermissionIdError extends ApplicationError {
  readonly code = 'INVALID_API_KEY_ENDPOINT_PERMISSION_ID';

  constructor(value: string) {
    super('Invalid API key endpoint permission id.', { value });
  }
}

export class InvalidIssuedApiKeyError extends ApplicationError {
  readonly code = 'INVALID_ISSUED_API_KEY';

  constructor() {
    super('Invalid issued API key.');
  }
}