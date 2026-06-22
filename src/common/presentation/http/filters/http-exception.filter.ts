import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { ApplicationError } from 'src/common/application/errors/application.error';
import { ApplicationErrorStatusMapper } from './application-error-status.mapper';
import { HttpErrorResponse } from './http-error-response';

@Catch()
export class GlobalHttpExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost): void {
    const http = host.switchToHttp();
    const response = http.getResponse<Response>();
    const request = http.getRequest<Request>();

    const errorResponse = this.toErrorResponse(exception, request);

    response.status(errorResponse.statusCode).json(errorResponse);
  }

  private toErrorResponse(
    exception: unknown,
    request: Request,
  ): HttpErrorResponse {
    if (exception instanceof ApplicationError) {
      return this.fromApplicationError(exception, request);
    }

    if (exception instanceof HttpException) {
      return this.fromHttpException(exception, request);
    }

    return this.fromUnknownError(request);
  }

  private fromApplicationError(
    exception: ApplicationError,
    request: Request,
  ): HttpErrorResponse {
    return {
      statusCode: ApplicationErrorStatusMapper.toHttpStatus(exception.code),
      code: exception.code,
      message: exception.message,
      details: exception.details,
      path: request.url,
      timestamp: new Date().toISOString(),
    };
  }

  private fromHttpException(
    exception: HttpException,
    request: Request,
  ): HttpErrorResponse {
    const statusCode = exception.getStatus();
    const responseBody = exception.getResponse();

    const { message, details, code } = this.normalizeHttpExceptionResponse(
      statusCode,
      responseBody,
    );

    return {
      statusCode,
      code,
      message,
      details,
      path: request.url,
      timestamp: new Date().toISOString(),
    };
  }

  private fromUnknownError(request: Request): HttpErrorResponse {
    return {
      statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
      code: 'INTERNAL_SERVER_ERROR',
      message: 'Internal server error.',
      path: request.url,
      timestamp: new Date().toISOString(),
    };
  }

  private normalizeHttpExceptionResponse(
    statusCode: number,
    responseBody: string | object,
  ): {
    code: string;
    message: string;
    details?: unknown;
  } {
    if (typeof responseBody === 'string') {
      return {
        code: this.getDefaultHttpErrorCode(statusCode),
        message: responseBody,
      };
    }

    if (!this.isRecord(responseBody)) {
      return {
        code: this.getDefaultHttpErrorCode(statusCode),
        message: 'HTTP request failed.',
      };
    }

    const rawMessage = responseBody.message;

    if (Array.isArray(rawMessage)) {
      return {
        code: this.getDefaultHttpErrorCode(statusCode),
        message: this.getDefaultHttpErrorMessage(statusCode),
        details: {
          errors: rawMessage,
        },
      };
    }

    if (typeof rawMessage === 'string') {
      return {
        code: this.getDefaultHttpErrorCode(statusCode),
        message: rawMessage,
      };
    }

    return {
      code: this.getDefaultHttpErrorCode(statusCode),
      message: this.getDefaultHttpErrorMessage(statusCode),
    };
  }

  private getDefaultHttpErrorCode(statusCode: number): string {
    switch (statusCode) {
      case HttpStatus.BAD_REQUEST:
        return 'BAD_REQUEST';
      case HttpStatus.UNAUTHORIZED:
        return 'UNAUTHORIZED';
      case HttpStatus.FORBIDDEN:
        return 'FORBIDDEN';
      case HttpStatus.NOT_FOUND:
        return 'NOT_FOUND';
      case HttpStatus.CONFLICT:
        return 'CONFLICT';
      case HttpStatus.UNPROCESSABLE_ENTITY:
        return 'UNPROCESSABLE_ENTITY';
      default:
        return `HTTP_${statusCode}`;
    }
  }

  private getDefaultHttpErrorMessage(statusCode: number): string {
    switch (statusCode) {
      case HttpStatus.BAD_REQUEST:
        return 'Bad request.';
      case HttpStatus.UNAUTHORIZED:
        return 'Unauthorized.';
      case HttpStatus.FORBIDDEN:
        return 'Forbidden.';
      case HttpStatus.NOT_FOUND:
        return 'Resource not found.';
      case HttpStatus.CONFLICT:
        return 'Conflict.';
      case HttpStatus.UNPROCESSABLE_ENTITY:
        return 'Unprocessable entity.';
      default:
        return 'HTTP request failed.';
    }
  }

  private isRecord(value: unknown): value is Record<string, unknown> {
    return value !== null && typeof value === 'object' && !Array.isArray(value);
  }
}