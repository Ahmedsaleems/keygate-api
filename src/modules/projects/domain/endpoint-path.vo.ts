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

  matches(requestPath: EndpointPath): boolean {
    const registeredSegments = this.toSegments(this.value);
    const requestSegments = this.toSegments(requestPath.value);

    if (registeredSegments.length !== requestSegments.length) {
      return false;
    }

    return registeredSegments.every((registeredSegment, index) => {
      const requestSegment = requestSegments[index];

      if (!registeredSegment || !requestSegment) {
        return false;
      }

      if (registeredSegment.startsWith(':')) {
        const paramName = registeredSegment.slice(1);

        return paramName.length > 0;
      }

      return registeredSegment === requestSegment;
    });
  }

  extractPathParams(requestPath: EndpointPath): Record<string, string> {
    const registeredSegments = this.toSegments(this.value);
    const requestSegments = this.toSegments(requestPath.value);
    const pathParams: Record<string, string> = {};

    registeredSegments.forEach((registeredSegment, index) => {
      if (registeredSegment.startsWith(':')) {
        const paramName = registeredSegment.slice(1);
        const requestSegment = requestSegments[index];

        if (paramName && requestSegment) {
          pathParams[paramName] = decodeURIComponent(requestSegment);
        }
      }
    });

    return pathParams;
  }

  private toSegments(value: string): string[] {
    const normalized =
      value.length > 1 && value.endsWith('/') ? value.slice(0, -1) : value;

    return normalized === '/' ? [] : normalized.slice(1).split('/');
  }
}
