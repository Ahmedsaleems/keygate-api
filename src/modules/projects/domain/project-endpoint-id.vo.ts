import { randomUUID } from 'node:crypto';
import { InvalidProjectEndpointIdError } from './error';

export class ProjectEndpointId {
  private constructor(private readonly value: string) {}

  static create(): ProjectEndpointId {
    return new ProjectEndpointId(randomUUID());
  }

  static fromString(value: string): ProjectEndpointId {
    const normalized = value.trim();

    if (!normalized) {
      throw new InvalidProjectEndpointIdError(value);
    }

    return new ProjectEndpointId(normalized);
  }

  toString(): string {
    return this.value;
  }

  equals(other: ProjectEndpointId): boolean {
    return this.value === other.value;
  }
}