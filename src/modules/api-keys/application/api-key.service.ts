import { ApiKeyService as ApiKeyCredentialService } from 'src/lib/api-keys/service';
import { ApiKeyEndpointPermission } from '../domain/endpoint-permission.entity';
import { ApiKey } from '../domain/api-key.entity';
import { ApiKeyHash } from '../domain/api-key-hash.vo';
import { ApiKeyId } from '../domain/api-key-id.vo';
import { ApiKeyName } from '../domain/api-key-name.vo';
import { ApiKeyPrefix } from '../domain/api-key-prefix.vo';
import { ApiKeyProjectEndpointId } from '../domain/project-endpoint-id.vo';
import { ApiKeyProjectId } from '../domain/project-id.vo';
import { IssuedApiKey } from '../domain/issued-api-key.vo';
import { ApiKeyAlreadyExistsError } from './error';
import { ApiKeyEndpointPermissionAlreadyExistsError } from './error';
import { ApiKeyEndpointPermissionNotFoundError } from './error';
import { ApiKeyNotFoundError } from './error';
import { ApiKeyRevokedError } from './error';
import { ApiKeyEndpointPermissionRepositoryPort } from './endpoint-permission-repository.port';
import { ApiKeyRepositoryPort } from './api-key-repository.port';

export class ApiKeysService {
  constructor(
    private readonly apiKeyRepository: ApiKeyRepositoryPort,
    private readonly permissionRepository: ApiKeyEndpointPermissionRepositoryPort,
    private readonly apiKeyCredentialService: ApiKeyCredentialService,
  ) {}

  async createApiKey(
    projectId: ApiKeyProjectId,
    name: ApiKeyName,
  ): Promise<IssuedApiKey> {
    const alreadyExists = await this.apiKeyRepository.existsByProjectIdAndName(
      projectId,
      name,
    );

    if (alreadyExists) {
      throw new ApiKeyAlreadyExistsError();
    }

    const credential = this.apiKeyCredentialService.generate();

    const apiKey = ApiKey.create({
      projectId,
      name,
      prefix: ApiKeyPrefix.create(credential.prefix),
      keyHash: ApiKeyHash.create(credential.hash),
    });

    await this.apiKeyRepository.create(apiKey);

    return IssuedApiKey.create(apiKey, credential.rawKey);
  }

  async listApiKeys(projectId: ApiKeyProjectId): Promise<ApiKey[]> {
    return this.apiKeyRepository.findByProjectId(projectId);
  }

  async getApiKey(
    projectId: ApiKeyProjectId,
    apiKeyId: ApiKeyId,
  ): Promise<ApiKey> {
    return this.getApiKeyForProject(projectId, apiKeyId);
  }

  async revokeApiKey(
    projectId: ApiKeyProjectId,
    apiKeyId: ApiKeyId,
  ): Promise<ApiKey> {
    const apiKey = await this.getApiKeyForProject(projectId, apiKeyId);

    apiKey.revoke();

    await this.apiKeyRepository.update(apiKey);

    return apiKey;
  }

  async assignEndpointPermission(
    projectId: ApiKeyProjectId,
    apiKeyId: ApiKeyId,
    endpointId: ApiKeyProjectEndpointId,
  ): Promise<ApiKeyEndpointPermission> {
    const apiKey = await this.getApiKeyForProject(projectId, apiKeyId);

    if (apiKey.isRevoked()) {
      throw new ApiKeyRevokedError();
    }

    const alreadyExists =
      await this.permissionRepository.existsByApiKeyIdAndEndpointId(
        apiKeyId,
        endpointId,
      );

    if (alreadyExists) {
      throw new ApiKeyEndpointPermissionAlreadyExistsError();
    }

    const permission = ApiKeyEndpointPermission.create({
      apiKeyId,
      projectId,
      endpointId,
    });

    await this.permissionRepository.create(permission);

    return permission;
  }

  async removeEndpointPermission(
    projectId: ApiKeyProjectId,
    apiKeyId: ApiKeyId,
    endpointId: ApiKeyProjectEndpointId,
  ): Promise<void> {
    await this.getApiKeyForProject(projectId, apiKeyId);

    const exists = await this.permissionRepository.existsByApiKeyIdAndEndpointId(
      apiKeyId,
      endpointId,
    );

    if (!exists) {
      throw new ApiKeyEndpointPermissionNotFoundError();
    }

    await this.permissionRepository.deleteByApiKeyIdAndEndpointId(
      apiKeyId,
      endpointId,
    );
  }

  async listEndpointPermissions(
    projectId: ApiKeyProjectId,
    apiKeyId: ApiKeyId,
  ): Promise<ApiKeyEndpointPermission[]> {
    await this.getApiKeyForProject(projectId, apiKeyId);

    return this.permissionRepository.findByApiKeyId(apiKeyId);
  }

  private async getApiKeyForProject(
    projectId: ApiKeyProjectId,
    apiKeyId: ApiKeyId,
  ): Promise<ApiKey> {
    const apiKey = await this.apiKeyRepository.findById(apiKeyId);

    if (!apiKey || !apiKey.belongsToProject(projectId)) {
      throw new ApiKeyNotFoundError();
    }

    return apiKey;
  }
}