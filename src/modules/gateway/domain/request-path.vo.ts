import { InvalidGatewayRequestPathError } from './error';

export class GatewayRequestPath {
  private constructor(private readonly value: string) {}

  static create(value: string): GatewayRequestPath {
    const normalized = this.normalize(value);

    if (!this.isValid(normalized)) {
      throw new InvalidGatewayRequestPathError(value);
    }

    return new GatewayRequestPath(normalized);
  }

  private static normalize(value: string): string {
    const withoutQuery = value.split('?')[0]?.split('#')[0] ?? '';
    const trimmed = withoutQuery.trim();

    if (!trimmed) {
      return '';
    }

    const withLeadingSlash = trimmed.startsWith('/') ? trimmed : `/${trimmed}`;

    if (withLeadingSlash.length > 1 && withLeadingSlash.endsWith('/')) {
      return withLeadingSlash.slice(0, -1);
    }

    return withLeadingSlash;
  }

  private static isValid(value: string): boolean {
    return value.startsWith('/') && !/\s/.test(value);
  }

  toString(): string {
    return this.value;
  }

  equals(other: GatewayRequestPath): boolean {
    return this.value === other.value;
  }
}