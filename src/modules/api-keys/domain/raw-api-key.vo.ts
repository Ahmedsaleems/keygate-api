import { InvalidRawApiKeyError } from './error';

export class RawApiKey {
  private constructor(private readonly value: string) {}

  static create(value: string): RawApiKey {
    const normalized = value.trim();

    if (!normalized) {
      throw new InvalidRawApiKeyError();
    }

    return new RawApiKey(normalized);
  }

  toString(): string {
    return this.value;
  }
}
