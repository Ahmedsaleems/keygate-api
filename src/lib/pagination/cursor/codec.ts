import { InvalidPaginationCursorError } from '../error';
import { CursorPaginationPayload } from './types';

export class CursorPaginationCodec {
  static encode(payload: CursorPaginationPayload): string {
    return Buffer.from(JSON.stringify(payload), 'utf8').toString('base64url');
  }

  static decode(cursor: string): unknown {
    if (!cursor.trim()) {
      throw new InvalidPaginationCursorError();
    }

    try {
      const decoded = Buffer.from(cursor, 'base64url').toString('utf8');
      return JSON.parse(decoded) as unknown;
    } catch {
      throw new InvalidPaginationCursorError();
    }
  }
}
