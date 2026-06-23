import { ApiKeyEndpointPermission } from '../domain/endpoint-permission.entity';
import { ApiKeyId } from '../domain/api-key-id.vo';
import { ApiKeyProjectEndpointId } from '../domain/project-endpoint-id.vo';
import { ApiKeyProjectId } from '../domain/project-id.vo';

export const API_KEY_ENDPOINT_PERMISSION_REPOSITORY_PORT = Symbol(
  'API_KEY_ENDPOINT_PERMISSION_REPOSITORY_PORT',
);

export interface ApiKeyEndpointPermissionRepositoryPort {
  create(permission: ApiKeyEndpointPermission): Promise<void>;

  findByApiKeyId(apiKeyId: ApiKeyId): Promise<ApiKeyEndpointPermission[]>;

  existsByApiKeyIdAndEndpointId(
    apiKeyId: ApiKeyId,
    endpointId: ApiKeyProjectEndpointId,
  ): Promise<boolean>;

  deleteByApiKeyIdAndEndpointId(
    apiKeyId: ApiKeyId,
    endpointId: ApiKeyProjectEndpointId,
  ): Promise<void>;

  deleteByProjectIdAndEndpointId(
    projectId: ApiKeyProjectId,
    endpointId: ApiKeyProjectEndpointId,
  ): Promise<void>;
}