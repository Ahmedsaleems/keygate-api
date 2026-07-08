import { InvalidUsageLogRequestPathError } from './error';

const MAX_REQUEST_PATH_LENGTH = 2048;

export class UsageLogRequestPath {
  private constructor(private readonly value: string) {}

  static create(value: string): UsageLogRequestPath {
    const normalized = this.normalize(value);

    if (!this.isValid(normalized)) {
      throw new InvalidUsageLogRequestPathError(value);
    }

    return new UsageLogRequestPath(normalized);
  }

  private static normalize(value: string): string {
    const withoutQueryOrFragment = value.split('?')[0]?.split('#')[0] ?? '';
    const trimmed = withoutQueryOrFragment.trim();

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
    return (
      value.startsWith('/') &&
      value.length <= MAX_REQUEST_PATH_LENGTH &&
      !/\s/.test(value) &&
      !value.includes('//') &&
      !/%[0-9A-Fa-f]{2}/.test(value)
    );
  }

  toString(): string {
    return this.value;
  }
}