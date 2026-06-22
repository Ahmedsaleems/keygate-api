import { ApplicationError } from 'src/lib/errors/application.error';

export const EmptyUserId: Error = new Error('UserId cannot be empty.')

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