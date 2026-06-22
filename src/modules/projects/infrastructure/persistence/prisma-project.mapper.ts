import { Project as PrismaProject } from '../../../../lib/prisma/generated';
import { Project } from '../../domain/project.entity';
import { ProjectDescription } from '../../domain/project-description.vo';
import { ProjectId } from '../../domain/project-id.vo';
import { ProjectName } from '../../domain/project-name.vo';
import { ProjectOwnerId } from '../../domain/project-owner-id.vo';

type ProjectPersistence = {
  id: string;
  ownerId: string;
  name: string;
  description: string | null;
  createdAt: Date;
  updatedAt: Date;
};

export class PrismaProjectMapper {
  static toDomain(record: PrismaProject): Project {
    return Project.rehydrate({
      id: ProjectId.fromString(record.id),
      ownerId: ProjectOwnerId.fromString(record.ownerId),
      name: ProjectName.create(record.name),
      description: ProjectDescription.createOptional(record.description),
      createdAt: record.createdAt,
      updatedAt: record.updatedAt,
    });
  }

  static toPersistence(project: Project): ProjectPersistence {
    return {
      id: project.getId().toString(),
      ownerId: project.getOwnerId().toString(),
      name: project.getName().toString(),
      description: project.getDescription()?.toString() ?? null,
      createdAt: project.getCreatedAt(),
      updatedAt: project.getUpdatedAt(),
    };
  }
}