import { ProjectDescription } from './project-description.vo';
import { ProjectId } from './project-id.vo';
import { ProjectName } from './project-name.vo';
import { ProjectOwnerId } from './project-owner-id.vo';

type CreateProjectProps = {
  ownerId: ProjectOwnerId;
  name: ProjectName;
  description: ProjectDescription | null;
};

type RehydrateProjectProps = {
  id: ProjectId;
  ownerId: ProjectOwnerId;
  name: ProjectName;
  description: ProjectDescription | null;
  createdAt: Date;
  updatedAt: Date;
};

export class Project {
  private constructor(
    private readonly id: ProjectId,
    private readonly ownerId: ProjectOwnerId,
    private name: ProjectName,
    private description: ProjectDescription | null,
    private readonly createdAt: Date,
    private updatedAt: Date,
  ) {}

  static create(props: CreateProjectProps): Project {
    const now = new Date();

    return new Project(
      ProjectId.create(),
      props.ownerId,
      props.name,
      props.description,
      now,
      now,
    );
  }

  static rehydrate(props: RehydrateProjectProps): Project {
    return new Project(
      props.id,
      props.ownerId,
      props.name,
      props.description,
      props.createdAt,
      props.updatedAt,
    );
  }

  rename(name: ProjectName): void {
    this.name = name;
    this.touch();
  }

  updateDescription(description: ProjectDescription | null): void {
    this.description = description;
    this.touch();
  }

  isOwnedBy(ownerId: ProjectOwnerId): boolean {
    return this.ownerId.equals(ownerId);
  }

  getId(): ProjectId {
    return this.id;
  }

  getOwnerId(): ProjectOwnerId {
    return this.ownerId;
  }

  getName(): ProjectName {
    return this.name;
  }

  getDescription(): ProjectDescription | null {
    return this.description;
  }

  getCreatedAt(): Date {
    return this.createdAt;
  }

  getUpdatedAt(): Date {
    return this.updatedAt;
  }

  private touch(): void {
    this.updatedAt = new Date();
  }
}