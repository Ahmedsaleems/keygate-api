import { InvalidEndpointPathError } from './error';

export class EndpointPath {
  private static readonly MAX_LENGTH = 300;
  private static readonly PATH_REGEX = /^\/[A-Za-z0-9._~:/-]*$/;

  private constructor(private readonly value: string) {}

  static create(value: string): EndpointPath {
    const normalized = value.trim();

    if (
      !normalized ||
      normalized.length > this.MAX_LENGTH ||
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

  toRouteShape(): string {
    if (this.value === '/') {
      return this.value;
    }

    const segments = this.value.slice(1).split('/');
    const normalizedSegments = segments.map((segment) =>
      segment.startsWith(':') ? ':param' : segment,
    );

    return `/${normalizedSegments.join('/')}`;
  }

  hasSameRouteShape(other: EndpointPath): boolean {
    return this.toRouteShape() === other.toRouteShape();
  }

  equals(other: EndpointPath): boolean {
    return this.value === other.value;
  }
}
