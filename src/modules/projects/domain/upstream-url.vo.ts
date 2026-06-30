import { InvalidUpstreamUrlError } from './error';

export class UpstreamUrl {
  private static readonly MAX_LENGTH = 1000;

  private constructor(private readonly value: string) {}

  static create(value: string): UpstreamUrl {
    const normalized = value.trim();

    if (!normalized || normalized.length > this.MAX_LENGTH) {
      throw new InvalidUpstreamUrlError(value);
    }

    let url: URL;

    try {
      url = new URL(normalized);
    } catch {
      throw new InvalidUpstreamUrlError(value);
    }

    if (url.protocol !== 'http:' && url.protocol !== 'https:') {
      throw new InvalidUpstreamUrlError(value);
    }

    return new UpstreamUrl(normalized);
  }

  toString(): string {
    return this.value;
  }

  equals(other: UpstreamUrl): boolean {
    return this.value === other.value;
  }
}
