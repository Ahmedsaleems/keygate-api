import { Injectable } from '@nestjs/common';
import { PrismaErrorClassifier } from '../../../../lib/database/prisma-error.classifier';
import { PrismaService } from '../../../../lib/database/prisma.service';
import {
  ApiKeyEndpointPermissionAlreadyExistsError,
  ApiKeyEndpointPermissionReferencesNotFoundError,
} from '../../application/error';
import { ApiKeyEndpointPermissionRepositoryPort } from '../../application/endpoint-permission-repository.port';
import { ApiKeyEndpointPermission } from '../../domain/endpoint-permission.entity';
import { ApiKeyId } from '../../domain/api-key-id.vo';
import { ApiKeyProjectEndpointId } from '../../domain/project-endpoint-id.vo';
import { ApiKeyProjectId } from '../../domain/project-id.vo';
import { PrismaApiKeyEndpointPermissionMapper } from './prisma-endpoint-permission.mapper';

@Injectable()
export class PrismaApiKeyEndpointPermissionRepository implements ApiKeyEndpointPermissionRepositoryPort {
  constructor(private readonly prisma: PrismaService) {}

  async create(permission: ApiKeyEndpointPermission): Promise<void> {
    try {
      await this.prisma.apiKeyEndpointPermission.create({
        data: PrismaApiKeyEndpointPermissionMapper.toCreateData(permission),
      });
    } catch (error: unknown) {
      if (
        PrismaErrorClassifier.isUniqueConstraintViolation(error, [
          'apiKeyId',
          'endpointId',
        ])
      ) {
        throw new ApiKeyEndpointPermissionAlreadyExistsError();
      }

      if (PrismaErrorClassifier.isForeignKeyConstraintViolation(error)) {
        throw new ApiKeyEndpointPermissionReferencesNotFoundError();
      }

      throw error;
    }
  }

  async findByApiKeyId(
    apiKeyId: ApiKeyId,
  ): Promise<ApiKeyEndpointPermission[]> {
    const records = await this.prisma.apiKeyEndpointPermission.findMany({
      where: {
        apiKeyId: apiKeyId.toString(),
      },
      orderBy: {
        createdAt: 'asc',
      },
    });

    return records.map((record) =>
      PrismaApiKeyEndpointPermissionMapper.toDomain(record),
    );
  }

  async existsByApiKeyIdAndEndpointId(
    apiKeyId: ApiKeyId,
    endpointId: ApiKeyProjectEndpointId,
  ): Promise<boolean> {
    const count = await this.prisma.apiKeyEndpointPermission.count({
      where: {
        apiKeyId: apiKeyId.toString(),
        endpointId: endpointId.toString(),
      },
    });

    return count > 0;
  }

  async deleteByApiKeyIdAndEndpointId(
    apiKeyId: ApiKeyId,
    endpointId: ApiKeyProjectEndpointId,
  ): Promise<void> {
    await this.prisma.apiKeyEndpointPermission.deleteMany({
      where: {
        apiKeyId: apiKeyId.toString(),
        endpointId: endpointId.toString(),
      },
    });
  }

  async deleteByProjectIdAndEndpointId(
    projectId: ApiKeyProjectId,
    endpointId: ApiKeyProjectEndpointId,
  ): Promise<void> {
    await this.prisma.apiKeyEndpointPermission.deleteMany({
      where: {
        projectId: projectId.toString(),
        endpointId: endpointId.toString(),
      },
    });
  }
}
