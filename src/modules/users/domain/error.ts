import { ApplicationError } from 'src/lib/errors/application.error';

export class InvalidEmailError extends ApplicationError {
    readonly code = 'INVALID_EMAIL';

    constructor(email: string) {
        super('Invalid email address.', {
            email,
        });
    }
}

export class InvalidPasswordHashError extends ApplicationError {
    readonly code = 'INVALID_PASSWORD_HASH';

    constructor() {
        super('Invalid password hash.');
    }
}

export class InvalidUserIdError extends ApplicationError {
    readonly code = 'INVALID_USER_ID';

    constructor(id: string) {
        super('Invalid user id.', {
            id,
        });
    }
}