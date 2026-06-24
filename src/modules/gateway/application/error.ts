import { ApplicationError } from '../../../lib/errors/application.error';

export class GatewayApiKeyMissingError extends ApplicationError {
  readonly code = 'GATEWAY_API_KEY_MISSING';

  constructor() {
    super('API key is required.');
  }
}

