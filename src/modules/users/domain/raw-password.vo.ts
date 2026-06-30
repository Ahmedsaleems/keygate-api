import { InvalidRawPasswordError } from './error';

export class RawPassword {
  private static readonly MIN_LENGTH = 8;

  private constructor(private readonly value: string) {}

  static create(value: string): RawPassword {
    if (!value || value.length < this.MIN_LENGTH) {
      throw new InvalidRawPasswordError();
    }

    return new RawPassword(value);
  }

  toString(): string {
    return this.value;
  }
}
