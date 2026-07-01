import { InvalidEndpointPathError } from './error';

export class EndpointPath {
  private static readonly MAX_LENGTH = 300;
  private static readonly PATH_REGEX = /^\/[A-Za-z0-9._~:/-]*$/;
  private static readonly PARAMETER_SEGMENT_REGEX = /^:[A-Za-z_][A-Za-z0-9_]*$/;

  private constructor(private readonly value: string) {}

  static create(value: string): EndpointPath {
    const trimmed = value.trim();
    const normalized = this.normalize(trimmed);

    if (
      !normalized ||
      normalized.length > this.MAX_LENGTH ||
      !normalized.startsWith('/') ||
      trimmed.includes('//') ||
      normalized.includes('?') ||
      normalized.includes('#') ||
      !this.PATH_REGEX.test(normalized) ||
      !this.hasValidSegments(normalized)
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

  getParameterNames(): string[] {
    return this.toSegments()
      .filter((segment) => segment.startsWith(':'))
      .map((segment) => segment.slice(1));
  }

  matches(requestPath: EndpointPath): boolean {
    const registeredSegments = this.toSegments();
    const requestSegments = requestPath.toSegments();

    if (registeredSegments.length !== requestSegments.length) {
      return false;
    }

    return registeredSegments.every((registeredSegment, index) => {
      const requestSegment = requestSegments[index];

      if (!requestSegment) {
        return false;
      }

      if (registeredSegment.startsWith(':')) {
        return true;
      }

      return registeredSegment === requestSegment;
    });
  }

  extractPathParams(requestPath: EndpointPath): Record<string, string> {
    const registeredSegments = this.toSegments();
    const requestSegments = requestPath.toSegments();
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

  private static normalize(value: string): string {
    return value.length > 1 && value.endsWith('/') ? value.slice(0, -1) : value;
  }

  private static hasValidSegments(value: string): boolean {
    if (value === '/') {
      return true;
    }

    const parameterNames = new Set<string>();

    return value
      .slice(1)
      .split('/')
      .every((segment) => {
        if (!segment) {
          return false;
        }

        if (!segment.startsWith(':')) {
          return true;
        }

        if (!this.PARAMETER_SEGMENT_REGEX.test(segment)) {
          return false;
        }

        const parameterName = segment.slice(1);

        if (parameterNames.has(parameterName)) {
          return false;
        }

        parameterNames.add(parameterName);

        return true;
      });
  }

  private toSegments(): string[] {
    return this.value === '/' ? [] : this.value.slice(1).split('/');
  }
}
