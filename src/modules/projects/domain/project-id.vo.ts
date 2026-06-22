import { randomUUID } from 'node:crypto';
import { InvalidProjectIdError } from './error';

export class ProjectId {
  private constructor(private readonly value: string) {}

  static create(): ProjectId {
    return new ProjectId(randomUUID());
  }

  static fromString(value: string): ProjectId {
    const normalized = value.trim();

    if (!normalized) {
      throw new InvalidProjectIdError(value);
    }

    return new ProjectId(normalized);
  }

  toString(): string {
    return this.value;
  }

  equals(other: ProjectId): boolean {
    return this.value === other.value;
  }
}