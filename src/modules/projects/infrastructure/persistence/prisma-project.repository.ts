import { Injectable } from '@nestjs/common';
import { PrismaErrorClassifier } from '../../../../lib/database/prisma-error.classifier';
import { PrismaService } from '../../../../lib/database/prisma.service';
import {
  ProjectAlreadyExistsError,
  ProjectNotFoundError,
  ProjectOwnerNotFoundError,
} from '../../application/error';
import { ProjectRepositoryPort } from '../../application/project-repository.port';
import { Project } from '../../domain/project.entity';
import { ProjectId } from '../../domain/project-id.vo';
import { ProjectName } from '../../domain/project-name.vo';
import { ProjectOwnerId } from '../../domain/project-owner-id.vo';
import { PrismaProjectMapper } from './prisma-project.mapper';

@Injectable()
export class PrismaProjectRepository implements ProjectRepositoryPort {
  constructor(private readonly prisma: PrismaService) {}

  async create(project: Project): Promise<void> {
    const persistenceProject = PrismaProjectMapper.toPersistence(project);

    try {
      await this.prisma.project.create({
        data: {
          id: persistenceProject.id,
          ownerId: persistenceProject.ownerId,
          name: persistenceProject.name,
          description: persistenceProject.description,
          createdAt: persistenceProject.createdAt,
          updatedAt: persistenceProject.updatedAt,
        },
      });
    } catch (error: unknown) {
      if (
        PrismaErrorClassifier.isUniqueConstraintViolation(error, [
          'ownerId',
          'name',
        ])
      ) {
        throw new ProjectAlreadyExistsError(
          persistenceProject.ownerId,
          persistenceProject.name,);
      }

      if (PrismaErrorClassifier.isForeignKeyConstraintViolation(error)) {
        throw new ProjectOwnerNotFoundError(persistenceProject.ownerId);
      }

      throw error;
    }
  }

  async findById(projectId: ProjectId): Promise<Project | null> {
    const project = await this.prisma.project.findUnique({
      where: {
        id: projectId.toString(),
      },
    });

    if (!project) {
      return null;
    }

    return PrismaProjectMapper.toDomain(project);
  }

  async findByOwnerId(ownerId: ProjectOwnerId): Promise<Project[]> {
    const projects = await this.prisma.project.findMany({
      where: {
        ownerId: ownerId.toString(),
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return projects.map(PrismaProjectMapper.toDomain);
  }

  async existsByOwnerIdAndName(
    ownerId: ProjectOwnerId,
    name: ProjectName,
  ): Promise<boolean> {
    const project = await this.prisma.project.findFirst({
      where: {
        ownerId: ownerId.toString(),
        name: name.toString(),
      },
      select: {
        id: true,
      },
    });

    return project !== null;
  }

  async update(project: Project): Promise<void> {
    const persistenceProject = PrismaProjectMapper.toPersistence(project);

    try {
      await this.prisma.project.update({
        where: {
          id: persistenceProject.id,
        },
        data: {
          name: persistenceProject.name,
          description: persistenceProject.description,
          updatedAt: persistenceProject.updatedAt,
        },
      });
    } catch (error: unknown) {
      if (
        PrismaErrorClassifier.isUniqueConstraintViolation(error, [
          'ownerId',
          'name',
        ])
      ) {
        throw new ProjectAlreadyExistsError(
          persistenceProject.ownerId,
          persistenceProject.name,);
      }

      if (PrismaErrorClassifier.isRecordNotFound(error)) {
        throw new ProjectNotFoundError(persistenceProject.id);
      }

      throw error;
    }
  }

  async delete(projectId: ProjectId): Promise<void> {
    await this.prisma.project.deleteMany({
      where: {
        id: projectId.toString(),
      },
    });
  }
}
