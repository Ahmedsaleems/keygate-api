import { InvalidProjectDescriptionError } from './error';

export class ProjectDescription {
  private static readonly MAX_LENGTH = 500;

  private constructor(private readonly value: string) {}

  static create(value: string): ProjectDescription {
    const normalized = value.trim();

    if (normalized.length > this.MAX_LENGTH) {
      throw new InvalidProjectDescriptionError();
    }

    return new ProjectDescription(normalized);
  }

  static createOptional(value?: string | null): ProjectDescription | null {
    if (value === undefined || value === null || value.trim().length === 0) {
      return null;
    }

    return this.create(value);
  }

  toString(): string {
    return this.value;
  }
}