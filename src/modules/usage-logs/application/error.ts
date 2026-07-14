import { ApplicationError } from 'src/lib/errors/application.error';

export class UsageLogNotFoundError extends ApplicationError {
    readonly code = 'USAGE_LOG_NOT_FOUND';

    constructor() {
        super('Usage log was not found.');
    }
}