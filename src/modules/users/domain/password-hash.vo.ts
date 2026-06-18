import { InvalidPasswordHashError } from './error';

export class PasswordHash {
  private constructor(private readonly value: string) {}

  static create(value: string): PasswordHash {
    if (!value || value.trim().length === 0) {
      throw new InvalidPasswordHashError();
    }

    return new PasswordHash(value);
  }

  toString(): string {
    return this.value;
  }
}