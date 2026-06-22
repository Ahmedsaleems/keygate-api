import { InvalidEndpointPathError } from './error';

export class EndpointPath {
  private static readonly PATH_REGEX = /^\/[A-Za-z0-9._~:/-]*$/;

  private constructor(private readonly value: string) {}

  static create(value: string): EndpointPath {
    const normalized = value.trim();

    if (
      !normalized ||
      !normalized.startsWith('/') ||
      normalized.includes('?') ||
      normalized.includes('#') ||
      !this.PATH_REGEX.test(normalized)
    ) {
      throw new InvalidEndpointPathError(value);
    }

    return new EndpointPath(normalized);
  }

  toString(): string {
    return this.value;
  }

  equals(other: EndpointPath): boolean {
    return this.value === other.value;
  }
}