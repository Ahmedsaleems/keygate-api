import { Project } from '../domain/project.entity';
import { ProjectId } from '../domain/project-id.vo';
import { ProjectName } from '../domain/project-name.vo';
import { ProjectOwnerId } from '../domain/project-owner-id.vo';

export const PROJECT_REPOSITORY_PORT = Symbol('PROJECT_REPOSITORY_PORT');

export interface ProjectRepositoryPort {
  create(project: Project): Promise<void>;

  findById(projectId: ProjectId): Promise<Project | null>;

  findByOwnerId(ownerId: ProjectOwnerId): Promise<Project[]>;

  existsByOwnerIdAndName(
    ownerId: ProjectOwnerId,
    name: ProjectName,
  ): Promise<boolean>;

  update(project: Project): Promise<void>;

  delete(projectId: ProjectId): Promise<void>;
}