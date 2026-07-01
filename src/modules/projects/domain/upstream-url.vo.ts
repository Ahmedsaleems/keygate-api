import { InvalidUpstreamUrlError } from './error';

export class UpstreamUrl {
  private static readonly MAX_LENGTH = 1000;
  private static readonly PARAMETER_SEGMENT_REGEX =
    /^:([A-Za-z_][A-Za-z0-9_]*)$/;

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

  getParameterNames(): string[] {
    return this.getPathSegments()
      .map((segment) => this.getParameterName(segment))
      .filter(
        (parameterName): parameterName is string => parameterName !== null,
      );
  }

  resolveUpstreamUrl(pathParams: Record<string, string>): string {
    const url = new URL(this.value);

    url.pathname = this.getPathSegments()
      .map((segment) => {
        const parameterName = this.getParameterName(segment);

        if (
          parameterName === null ||
          !Object.hasOwn(pathParams, parameterName)
        ) {
          return segment;
        }

        return encodeURIComponent(pathParams[parameterName]);
      })
      .join('/');

    return url.toString();
  }

  private getPathSegments(): string[] {
    return new URL(this.value).pathname.split('/');
  }

  private getParameterName(segment: string): string | null {
    return UpstreamUrl.PARAMETER_SEGMENT_REGEX.exec(segment)?.[1] ?? null;
  }
}
