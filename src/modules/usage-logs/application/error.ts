import { ApplicationError } from 'src/lib/errors/application.error';

export class UsageLogNotFoundError extends ApplicationError {
    readonly code = 'USAGE_LOG_NOT_FOUND';

    constructor() {
        super('Usage log was not found.');
    }
}

export class UsageLogProjectNotAccessibleError extends ApplicationError {
    readonly code = 'USAGE_LOG_PROJECT_NOT_ACCESSIBLE';

    constructor() {
        super('Project is not accessible.');
    }
}

export class InvalidUsageLogDateRangeError extends ApplicationError {
    readonly code = 'INVALID_USAGE_LOG_DATE_RANGE';

    constructor(from: Date, to: Date) {
        super('Invalid usage log date range.', {
            from: from.toISOString(),
            to: to.toISOString(),
        });
    }
}

export class UsageLogReferenceNotFoundError extends ApplicationError {
    readonly code = 'USAGE_LOG_REFERENCE_NOT_FOUND';

    constructor() {
        super('A referenced usage-log resource was not found.');
    }
}