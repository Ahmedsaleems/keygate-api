import { InvalidUpstreamUrlError } from './error';

export class UpstreamUrl {
  private constructor(private readonly value: string) {}

  static create(value: string): UpstreamUrl {
    const normalized = value.trim();

    try {
      const url = new URL(normalized);

      if (url.protocol !== 'http:' && url.protocol !== 'https:') {
        throw new InvalidUpstreamUrlError(value);
      }

      return new UpstreamUrl(normalized);
    } catch {
      throw new InvalidUpstreamUrlError(value);
    }
  }

  toString(): string {
    return this.value;
  }

  equals(other: UpstreamUrl): boolean {
    return this.value === other.value;
  }
}