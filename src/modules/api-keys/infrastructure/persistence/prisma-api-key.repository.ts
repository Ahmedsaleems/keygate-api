import { Injectable } from '@nestjs/common';
import { PrismaErrorClassifier } from '../../../../lib/database/prisma-error.classifier';
import { PrismaService } from '../../../../lib/database/prisma.service';
import {
  ApiKeyAlreadyExistsError,
  ApiKeyNotFoundError,
  ApiKeyProjectNotAccessibleError,
} from '../../application/error';
import { InvalidIssuedApiKeyError } from '../../domain/error';
import { ApiKeyRepositoryPort } from '../../application/api-key-repository.port';
import { ApiKey } from '../../domain/api-key.entity';
import { ApiKeyHash } from '../../domain/api-key-hash.vo';
import { ApiKeyId } from '../../domain/api-key-id.vo';
import { ApiKeyName } from '../../domain/api-key-name.vo';
import { ApiKeyProjectId } from '../../domain/project-id.vo';
import { PrismaApiKeyMapper } from './prisma-api-key.mapper';

@Injectable()
export class PrismaApiKeyRepository implements ApiKeyRepositoryPort {
  constructor(private readonly prisma: PrismaService) {}

  async create(apiKey: ApiKey): Promise<void> {
    try {
      await this.prisma.apiKey.create({
        data: PrismaApiKeyMapper.toCreateData(apiKey),
      });
    } catch (error: unknown) {
      if (
        PrismaErrorClassifier.isUniqueConstraintViolation(error, [
          'projectId',
          'name',
        ])
      ) {
        throw new ApiKeyAlreadyExistsError(apiKey.getName().toString());
      }

      if (
        PrismaErrorClassifier.isUniqueConstraintViolation(error, ['keyHash'])
      ) {
        throw new InvalidIssuedApiKeyError();
      }

      if (PrismaErrorClassifier.isForeignKeyConstraintViolation(error)) {
        throw new ApiKeyProjectNotAccessibleError();
      }

      throw error;
    }
  }

  async findById(apiKeyId: ApiKeyId): Promise<ApiKey | null> {
    const record = await this.prisma.apiKey.findUnique({
      where: {
        id: apiKeyId.toString(),
      },
    });

    return record ? PrismaApiKeyMapper.toDomain(record) : null;
  }

  async findByProjectId(projectId: ApiKeyProjectId): Promise<ApiKey[]> {
    const records = await this.prisma.apiKey.findMany({
      where: {
        projectId: projectId.toString(),
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return records.map((record) => PrismaApiKeyMapper.toDomain(record));
  }

  async findByHash(keyHash: ApiKeyHash): Promise<ApiKey | null> {
    const record = await this.prisma.apiKey.findUnique({
      where: {
        keyHash: keyHash.toString(),
      },
    });

    return record ? PrismaApiKeyMapper.toDomain(record) : null;
  }

  async existsByProjectIdAndName(
    projectId: ApiKeyProjectId,
    name: ApiKeyName,
  ): Promise<boolean> {
    const count = await this.prisma.apiKey.count({
      where: {
        projectId: projectId.toString(),
        name: name.toString(),
      },
    });

    return count > 0;
  }

  async update(apiKey: ApiKey): Promise<void> {
    try {
      await this.prisma.apiKey.update({
        where: {
          id: apiKey.getId().toString(),
        },
        data: PrismaApiKeyMapper.toUpdateData(apiKey),
      });
    } catch (error: unknown) {
      if (PrismaErrorClassifier.isRecordNotFound(error)) {
        throw new ApiKeyNotFoundError();
      }

      throw error;
    }
  }
}