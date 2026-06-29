import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, catchError, throwError } from 'rxjs';
import { DatabaseUnavailableError } from './error';
import { PrismaErrorClassifier } from './prisma-error.classifier';

@Injectable()
export class PrismaExceptionInterceptor implements NestInterceptor {
  intercept(
    _context: ExecutionContext,
    next: CallHandler,
  ): Observable<unknown> {
    return next.handle().pipe(
      catchError((error: unknown) => {
        if (PrismaErrorClassifier.isDatabaseUnavailable(error)) {
          return throwError(() => new DatabaseUnavailableError(error));
        }

        return throwError(() => error);
      }),
    );
  }
}
