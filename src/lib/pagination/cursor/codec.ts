import { InvalidPaginationCursorError } from '../error';
import { CursorPaginationPayload } from './types';

export class CursorPaginationCodec {
  static encode(payload: CursorPaginationPayload): string {
    return Buffer.from(JSON.stringify(payload), 'utf8').toString('base64url');
  }

  static decode<TPayload extends CursorPaginationPayload>(
    cursor: string,
  ): TPayload {
    if (!cursor.trim()) {
      throw new InvalidPaginationCursorError();
    }

    try {
      const decoded = Buffer.from(cursor, 'base64url').toString('utf8');
      const parsed = JSON.parse(decoded) as unknown;

      if (!this.isCursorPayload(parsed)) {
        throw new InvalidPaginationCursorError();
      }

      return parsed as TPayload;
    } catch {
      throw new InvalidPaginationCursorError();
    }
  }

  private static isCursorPayload(
    value: unknown,
  ): value is CursorPaginationPayload {
    if (!value || typeof value !== 'object' || Array.isArray(value)) {
      return false;
    }

    return Object.values(value).every(
      (item) =>
        typeof item === 'string' ||
        typeof item === 'number' ||
        typeof item === 'boolean' ||
        item === null,
    );
  }
}