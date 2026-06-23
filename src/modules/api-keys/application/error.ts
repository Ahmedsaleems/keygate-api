import { ApplicationError } from 'src/lib/errors/application.error';

export class ApiKeyAlreadyExistsError extends ApplicationError {
  readonly code = 'API_KEY_ALREADY_EXISTS';

  constructor() {
    super('API key with this name already exists for this project.');
  }
}

export class ApiKeyNotFoundError extends ApplicationError {
  readonly code = 'API_KEY_NOT_FOUND';

  constructor() {
    super('API key was not found.');
  }
}

export class ApiKeyRevokedError extends ApplicationError {
  readonly code = 'API_KEY_REVOKED';

  constructor() {
    super('API key has been revoked.');
  }
}

export class ApiKeyEndpointPermissionAlreadyExistsError extends ApplicationError {
  readonly code = 'API_KEY_ENDPOINT_PERMISSION_ALREADY_EXISTS';

  constructor() {
    super('API key already has permission for this endpoint.');
  }
}

export class ApiKeyEndpointPermissionNotFoundError extends ApplicationError {
  readonly code = 'API_KEY_ENDPOINT_PERMISSION_NOT_FOUND';

  constructor() {
    super('API key endpoint permission was not found.');
  }
}