import { randomUUID } from 'node:crypto';
import { EmptyUserId } from './error';

export class UserId {
  private constructor(private readonly value: string) {}

  static create(): UserId {
    return new UserId(randomUUID());
  }

  static fromString(value: string): UserId {
    if (!value || value.trim().length === 0) {
      throw EmptyUserId;
    }

    return new UserId(value);
  }

  toString(): string {
    return this.value;
  }

  equals(other: UserId): boolean {
    return this.value === other.value;
  }
}