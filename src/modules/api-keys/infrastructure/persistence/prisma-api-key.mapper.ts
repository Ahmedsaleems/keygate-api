import {
  ApiKey as PrismaApiKeyRecord,
  ApiKeyStatus as PrismaApiKeyStatus,
} from '../../../../lib/prisma/generated';
import { ApiKey } from '../../domain/api-key.entity';
import { ApiKeyHash } from '../../domain/api-key-hash.vo';
import { ApiKeyId } from '../../domain/api-key-id.vo';
import { ApiKeyName } from '../../domain/api-key-name.vo';
import { ApiKeyPrefix } from '../../domain/api-key-prefix.vo';
import { ApiKeyProjectId } from '../../domain/project-id.vo';
import { ApiKeyStatus } from '../../domain/api-key-status.vo';

export class PrismaApiKeyMapper {
  static toDomain(record: PrismaApiKeyRecord): ApiKey {
    return ApiKey.rehydrate({
      id: ApiKeyId.fromString(record.id),
      projectId: ApiKeyProjectId.fromString(record.projectId),
      name: ApiKeyName.create(record.name),
      prefix: ApiKeyPrefix.create(record.prefix),
      keyHash: ApiKeyHash.create(record.keyHash),
      status: ApiKeyStatus.create(record.status),
      revokedAt: record.revokedAt,
      createdAt: record.createdAt,
      updatedAt: record.updatedAt,
    });
  }

  static toCreateData(apiKey: ApiKey) {
    return {
      id: apiKey.getId().toString(),
      projectId: apiKey.getProjectId().toString(),
      name: apiKey.getName().toString(),
      prefix: apiKey.getPrefix().toString(),
      keyHash: apiKey.getKeyHash().toString(),
      status: apiKey.getStatus().toString() as PrismaApiKeyStatus,
      revokedAt: apiKey.getRevokedAt(),
      createdAt: apiKey.getCreatedAt(),
      updatedAt: apiKey.getUpdatedAt(),
    };
  }

  static toUpdateData(apiKey: ApiKey) {
    return {
      name: apiKey.getName().toString(),
      status: apiKey.getStatus().toString() as PrismaApiKeyStatus,
      revokedAt: apiKey.getRevokedAt(),
      updatedAt: apiKey.getUpdatedAt(),
    };
  }
}