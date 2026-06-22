import { ApplicationError } from 'src/lib/errors/application.error';

export class UserAlreadyExistsError extends ApplicationError {
  readonly code = 'USER_ALREADY_EXISTS';

  constructor(email: string) {
    super('User with this email already exists.', {
      email,
    });
  }
}

export class InvalidCredentialsError extends ApplicationError {
  readonly code = 'INVALID_CREDENTIALS';

  constructor() {
    super('Invalid email or password.');
  }
}

export class UserNotFoundError extends ApplicationError {
  readonly code = 'USER_NOT_FOUND';

  constructor(userId: string) {
    super('User was not found.', {
      userId,
    });
  }
}