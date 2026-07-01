import { Injectable } from '@nestjs/common';
import { PrismaErrorClassifier } from '../../../../lib/database/prisma-error.classifier';
import { PrismaService } from '../../../../lib/database/prisma.service';
import {
  ProjectEndpointAlreadyExistsError,
  ProjectEndpointNotFoundError,
  ProjectEndpointRouteShapeAlreadyExistsError,
  ProjectNotFoundError,
} from '../../application/error';
import { ProjectEndpointRepositoryPort } from '../../application/project-endpoint-repository.port';
import { ProjectEndpoint } from '../../domain/project-endpoint.entity';
import { EndpointMethod } from '../../domain/endpoint-method.vo';
import { EndpointPath } from '../../domain/endpoint-path.vo';
import { ProjectEndpointId } from '../../domain/project-endpoint-id.vo';
import { ProjectId } from '../../domain/project-id.vo';
import { PrismaProjectEndpointMapper } from './prisma-project-endpoint.mapper';

type ProjectEndpointPersistence = ReturnType<
  typeof PrismaProjectEndpointMapper.toPersistence
>;

@Injectable()
export class PrismaProjectEndpointRepository implements ProjectEndpointRepositoryPort {
  constructor(private readonly prisma: PrismaService) {}

  async create(endpoint: ProjectEndpoint): Promise<void> {
    const persistenceEndpoint =
      PrismaProjectEndpointMapper.toPersistence(endpoint);

    try {
      await this.prisma.projectEndpoint.create({
        data: {
          id: persistenceEndpoint.id,
          projectId: persistenceEndpoint.projectId,
          method: persistenceEndpoint.method,
          path: persistenceEndpoint.path,
          routeShape: persistenceEndpoint.routeShape,
          upstreamUrl: persistenceEndpoint.upstreamUrl,
          status: persistenceEndpoint.status,
          createdAt: persistenceEndpoint.createdAt,
          updatedAt: persistenceEndpoint.updatedAt,
        },
      });
    } catch (error: unknown) {
      if (
        PrismaErrorClassifier.isUniqueConstraintViolation(error, [
          'projectId',
          'method',
          'routeShape',
        ])
      ) {
        throw await this.createEndpointConflictError(persistenceEndpoint);
      }

      if (PrismaErrorClassifier.isForeignKeyConstraintViolation(error)) {
        throw new ProjectNotFoundError(persistenceEndpoint.projectId);
      }

      throw error;
    }
  }

  async findById(
    endpointId: ProjectEndpointId,
  ): Promise<ProjectEndpoint | null> {
    const endpoint = await this.prisma.projectEndpoint.findUnique({
      where: {
        id: endpointId.toString(),
      },
    });

    if (!endpoint) {
      return null;
    }

    return PrismaProjectEndpointMapper.toDomain(endpoint);
  }

  async findByProjectId(projectId: ProjectId): Promise<ProjectEndpoint[]> {
    const endpoints = await this.prisma.projectEndpoint.findMany({
      where: {
        projectId: projectId.toString(),
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return endpoints.map((endpoint) =>
      PrismaProjectEndpointMapper.toDomain(endpoint),
    );
  }

  async findByProjectIdAndMethod(
    projectId: ProjectId,
    method: EndpointMethod,
  ): Promise<ProjectEndpoint[]> {
    const endpoints = await this.prisma.projectEndpoint.findMany({
      where: {
        projectId: projectId.toString(),
        method: method.toString(),
      },
    });

    return endpoints.map((endpoint) =>
      PrismaProjectEndpointMapper.toDomain(endpoint),
    );
  }

  async existsByProjectIdMethodAndPath(
    projectId: ProjectId,
    method: EndpointMethod,
    path: EndpointPath,
  ): Promise<boolean> {
    const endpoint = await this.prisma.projectEndpoint.findFirst({
      where: {
        projectId: projectId.toString(),
        method: method.toString(),
        path: path.toString(),
      },
      select: {
        id: true,
      },
    });

    return endpoint !== null;
  }

  async update(endpoint: ProjectEndpoint): Promise<void> {
    const persistenceEndpoint =
      PrismaProjectEndpointMapper.toPersistence(endpoint);

    try {
      await this.prisma.projectEndpoint.update({
        where: {
          id: persistenceEndpoint.id,
        },
        data: {
          method: persistenceEndpoint.method,
          path: persistenceEndpoint.path,
          routeShape: persistenceEndpoint.routeShape,
          upstreamUrl: persistenceEndpoint.upstreamUrl,
          status: persistenceEndpoint.status,
          updatedAt: persistenceEndpoint.updatedAt,
        },
      });
    } catch (error: unknown) {
      if (
        PrismaErrorClassifier.isUniqueConstraintViolation(error, [
          'projectId',
          'method',
          'routeShape',
        ])
      ) {
        throw await this.createEndpointConflictError(persistenceEndpoint);
      }

      if (PrismaErrorClassifier.isRecordNotFound(error)) {
        throw new ProjectEndpointNotFoundError(persistenceEndpoint.id);
      }

      throw error;
    }
  }

  async delete(endpointId: ProjectEndpointId): Promise<void> {
    await this.prisma.projectEndpoint.deleteMany({
      where: {
        id: endpointId.toString(),
      },
    });
  }

  private async createEndpointConflictError(
    endpoint: ProjectEndpointPersistence,
  ): Promise<
    | ProjectEndpointAlreadyExistsError
    | ProjectEndpointRouteShapeAlreadyExistsError
  > {
    const conflictingEndpoint = await this.prisma.projectEndpoint.findFirst({
      where: {
        projectId: endpoint.projectId,
        method: endpoint.method,
        routeShape: endpoint.routeShape,
      },
      select: {
        path: true,
      },
    });

    if (conflictingEndpoint?.path === endpoint.path) {
      return new ProjectEndpointAlreadyExistsError(
        endpoint.projectId,
        endpoint.method,
        endpoint.path,
      );
    }

    return new ProjectEndpointRouteShapeAlreadyExistsError(
      endpoint.projectId,
      endpoint.method,
      endpoint.path,
      endpoint.routeShape,
      conflictingEndpoint?.path,
    );
  }
}
