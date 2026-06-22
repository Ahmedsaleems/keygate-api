import { InvalidProjectNameError } from './error';

export class ProjectName {
  private static readonly MIN_LENGTH = 3;
  private static readonly MAX_LENGTH = 80;

  private constructor(private readonly value: string) {}

  static create(value: string): ProjectName {
    const normalized = value.trim();

    if (
      normalized.length < this.MIN_LENGTH ||
      normalized.length > this.MAX_LENGTH
    ) {
      throw new InvalidProjectNameError(value);
    }

    return new ProjectName(normalized);
  }

  toString(): string {
    return this.value;
  }

  equals(other: ProjectName): boolean {
    return this.value === other.value;
  }
}