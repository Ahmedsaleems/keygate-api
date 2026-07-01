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

    const url = new URL(this.value);
    const existingQuery = url.search.slice(1);
    const incomingQuery = queryString.toString();

    url.search = existingQuery
      ? `${existingQuery}&${incomingQuery}`
      : incomingQuery;

    return url.toString();
  }

  toString(): string {
    return this.value;
  }
}
