import { randomUUID } from 'node:crypto';
import { InvalidUserIdError } from './error';

export class UserId {
  private constructor(private readonly value: string) {}

  static create(): UserId {
    return new UserId(randomUUID());
  }

  static fromString(value: string): UserId {
    const normalized = value.trim();
    if (!normalized) {
      throw new InvalidUserIdError(normalized);
    }

    return new UserId(normalized);
  }

  toString(): string {
    return this.value;
  }

  equals(other: UserId): boolean {
    return this.value === other.value;
  }
}