import { ApplicationError } from '../../../lib/errors/application.error';

export class InvalidGatewayRawApiKeyError extends ApplicationError {
  readonly code = 'INVALID_GATEWAY_RAW_API_KEY';

  constructor() {
    super('Invalid gateway raw API key.');
  }
}

