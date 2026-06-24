import { InvalidGatewayQueryStringError } from './error';

export class GatewayQueryString {
  private constructor(private readonly value: string) {}

  static empty(): GatewayQueryString {
    return new GatewayQueryString('');
  }

  static create(value: string | undefined | null): GatewayQueryString {
    if (!value) {
      return GatewayQueryString.empty();
    }

    const normalized = value.startsWith('?') ? value.slice(1) : value;

    if (/\s/.test(normalized)) {
      throw new InvalidGatewayQueryStringError(value);
    }

    return new GatewayQueryString(normalized);
  }

  isEmpty(): boolean {
    return this.value.length === 0;
  }

  toString(): string {
    return this.value;
  }

  toUrlSuffix(): string {
    return this.isEmpty() ? '' : `?${this.value}`;
  }
}