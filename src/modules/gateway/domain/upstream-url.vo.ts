import { InvalidGatewayUpstreamUrlError } from './error';
import { GatewayQueryString } from './query-string.vo';

export class GatewayUpstreamUrl {
  private constructor(private readonly value: string) {}

  static create(value: string): GatewayUpstreamUrl {
    const normalized = value.trim();

    if (!this.isValid(normalized)) {
      throw new InvalidGatewayUpstreamUrlError(value);
    }

    return new GatewayUpstreamUrl(normalized);
  }

  private static isValid(value: string): boolean {
    try {
      const url = new URL(value);
      return url.protocol === 'http:' || url.protocol === 'https:';
    } catch {
      return false;
    }
  }

  withQueryString(queryString: GatewayQueryString): string {
    if (queryString.isEmpty()) {
      return this.value;
    }

    const separator = this.value.includes('?') ? '&' : '?';

    return `${this.value}${separator}${queryString.toString()}`;
  }

  toString(): string {
    return this.value;
  }
}