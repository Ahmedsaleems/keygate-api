import { Project } from '../../../domain/project.entity';

export class ProjectResponseDto {
  id!: string;
  ownerId!: string;
  name!: string;
  description!: string | null;
  createdAt!: string;
  updatedAt!: string;

  static fromDomain(project: Project): ProjectResponseDto {
    return {
      id: project.getId().toString(),
      ownerId: project.getOwnerId().toString(),
      name: project.getName().toString(),
      description: project.getDescription()?.toString() ?? null,
      createdAt: project.getCreatedAt().toISOString(),
      updatedAt: project.getUpdatedAt().toISOString(),
    };
  }

  static fromDomainList(projects: Project[]): ProjectResponseDto[] {
    return projects.map((project) => this.fromDomain(project));
  }
}