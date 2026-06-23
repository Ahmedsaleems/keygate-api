import { ApiKeyEndpointPermission as PrismaApiKeyEndpointPermissionRecord } from '../../../../lib/prisma/generated';
import { ApiKeyEndpointPermission } from '../../domain/endpoint-permission.entity';
import { ApiKeyEndpointPermissionId } from '../../domain/endpoint-permission-id.vo';
import { ApiKeyId } from '../../domain/api-key-id.vo';
import { ApiKeyProjectEndpointId } from '../../domain/project-endpoint-id.vo';
import { ApiKeyProjectId } from '../../domain/project-id.vo';

export class PrismaApiKeyEndpointPermissionMapper {
  static toDomain(
    record: PrismaApiKeyEndpointPermissionRecord,
  ): ApiKeyEndpointPermission {
    return ApiKeyEndpointPermission.rehydrate({
      id: ApiKeyEndpointPermissionId.fromString(record.id),
      apiKeyId: ApiKeyId.fromString(record.apiKeyId),
      projectId: ApiKeyProjectId.fromString(record.projectId),
      endpointId: ApiKeyProjectEndpointId.fromString(record.endpointId),
      createdAt: record.createdAt,
    });
  }

  static toCreateData(permission: ApiKeyEndpointPermission) {
    return {
      id: permission.getId().toString(),
      apiKeyId: permission.getApiKeyId().toString(),
      projectId: permission.getProjectId().toString(),
      endpointId: permission.getEndpointId().toString(),
      createdAt: permission.getCreatedAt(),
    };
  }
}