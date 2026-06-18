import { ApplicationError } from '../../application/errors/application.error';

export abstract class DatabaseError extends ApplicationError {}

export class DatabaseConnectionError extends DatabaseError {
  readonly code = 'DATABASE_CONNECTION_FAILED';

  constructor(reason?: string) {
    super('Database connection failed during application startup.', {
      reason: reason ?? 'Unknown database connection error.',
      suggestion:
        'Verify that PostgreSQL is running and that database.url is correct.',
    });
  }
}

