import { ApplicationError } from 'src/lib/errors/application.error';

export class InvalidProjectIdError extends ApplicationError {
  readonly code = 'INVALID_PROJECT_ID';

  constructor(value: string) {
    super('Invalid project id.', { value });
  }
}

export class InvalidProjectOwnerIdError extends ApplicationError {
  readonly code = 'INVALID_PROJECT_OWNER_ID';

  constructor(value: string) {
    super('Invalid project owner id.', { value });
  }
}

export class InvalidProjectEndpointIdError extends ApplicationError {
  readonly code = 'INVALID_PROJECT_ENDPOINT_ID';

  constructor(value: string) {
    super('Invalid project endpoint id.', { value });
  }
}

export class InvalidProjectNameError extends ApplicationError {
  readonly code = 'INVALID_PROJECT_NAME';

  constructor(value: string) {
    super('Invalid project name.', {
      value,
      constraints: {
        minLength: 3,
        maxLength: 80,
      },
    });
  }
}

export class InvalidProjectDescriptionError extends ApplicationError {
  readonly code = 'INVALID_PROJECT_DESCRIPTION';

  constructor() {
    super('Invalid project description.', {
      constraints: {
        maxLength: 500,
      },
    });
  }
}

export class InvalidEndpointMethodError extends ApplicationError {
  readonly code = 'INVALID_ENDPOINT_METHOD';

  constructor(value: string) {
    super('Invalid endpoint method.', {
      value,
      allowedMethods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    });
  }
}

export class InvalidEndpointPathError extends ApplicationError {
  readonly code = 'INVALID_ENDPOINT_PATH';

  constructor(value: string) {
    super('Invalid endpoint path.', {
      value,
      examples: ['/orders', '/orders/:orderId'],
      constraints: {
        maxLength: 300,
        parameterNamesMustBeUnique: true,
      },
    });
  }
}

export class InvalidEndpointStatusError extends ApplicationError {
  readonly code = 'INVALID_ENDPOINT_STATUS';

  constructor(value: string) {
    super('Invalid endpoint status.', {
      value,
      allowedStatuses: ['ENABLED', 'DISABLED'],
    });
  }
}

export class InvalidUpstreamUrlError extends ApplicationError {
  readonly code = 'INVALID_UPSTREAM_URL';

  constructor(value: string) {
    super('Invalid upstream URL.', {
      value,
      constraints: {
        maxLength: 1000,
        allowedProtocols: ['http', 'https'],
      },
    });
  }
}

export class InvalidEndpointUpstreamParametersError extends ApplicationError {
  readonly code = 'INVALID_ENDPOINT_UPSTREAM_PARAMETERS';

  constructor(
    path: string,
    upstreamUrl: string,
    unavailableParameters: string[],
  ) {
    super(
      'Upstream URL contains parameters that are not defined by the endpoint path.',
      {
        path,
        upstreamUrl,
        unavailableParameters,
      },
    );
  }
}
