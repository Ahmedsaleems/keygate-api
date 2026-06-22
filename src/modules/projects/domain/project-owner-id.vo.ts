import { InvalidProjectOwnerIdError } from './error';

export class ProjectOwnerId {
  private constructor(private readonly value: string) {}

  static fromString(value: string): ProjectOwnerId {
    const normalized = value.trim();

    if (!normalized) {
      throw new InvalidProjectOwnerIdError(value);
    }

    return new ProjectOwnerId(normalized);
  }

  toString(): string {
    return this.value;
  }

  equals(other: ProjectOwnerId): boolean {
    return this.value === other.value;
  }
}