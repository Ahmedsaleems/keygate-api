import { ApiKeyService as ApiKeyCredentialService } from 'src/lib/api-keys/service';
import { ApiKeyEndpointPermission } from '../domain/endpoint-permission.entity';
import { ApiKey } from '../domain/api-key.entity';
import { ApiKeyHash } from '../domain/api-key-hash.vo';
import { ApiKeyId } from '../domain/api-key-id.vo';
import { ApiKeyName } from '../domain/api-key-name.vo';
import { ApiKeyOwnerId } from '../domain/owner-id.vo';
import { ApiKeyPrefix } from '../domain/api-key-prefix.vo';
import { ApiKeyProjectEndpointId } from '../domain/project-endpoint-id.vo';
import { ApiKeyProjectId } from '../domain/project-id.vo';
import { IssuedApiKey } from '../domain/issued-api-key.vo';
import {
    ApiKeyAlreadyExistsError,
    ApiKeyEndpointPermissionAlreadyExistsError,
    ApiKeyEndpointPermissionNotFoundError,
    ApiKeyNotFoundError,
    ApiKeyRevokedError,
} from './error';
import { ApiKeyEndpointPermissionRepositoryPort } from './endpoint-permission-repository.port';
import { ApiKeyProjectAccessPort } from './project-access.port';
import { ApiKeyRepositoryPort } from './api-key-repository.port';

export class ApiKeysService {
    constructor(
        private readonly apiKeyRepository: ApiKeyRepositoryPort,
        private readonly permissionRepository: ApiKeyEndpointPermissionRepositoryPort,
        private readonly projectAccess: ApiKeyProjectAccessPort,
        private readonly apiKeyCredentialService: ApiKeyCredentialService,
    ) { }

    async createApiKey(
        ownerId: ApiKeyOwnerId,
        projectId: ApiKeyProjectId,
        name: ApiKeyName,
    ): Promise<IssuedApiKey> {
        await this.projectAccess.ensureProjectIsAccessible(ownerId, projectId);

        const alreadyExists = await this.apiKeyRepository.existsByProjectIdAndName(
            projectId,
            name,
        );

        if (alreadyExists) {
            throw new ApiKeyAlreadyExistsError(name.toString());
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

    async listApiKeys(
        ownerId: ApiKeyOwnerId,
        projectId: ApiKeyProjectId,
    ): Promise<ApiKey[]> {
        await this.projectAccess.ensureProjectIsAccessible(ownerId, projectId);

        return this.apiKeyRepository.findByProjectId(projectId);
    }

    async getApiKey(
        ownerId: ApiKeyOwnerId,
        projectId: ApiKeyProjectId,
        apiKeyId: ApiKeyId,
    ): Promise<ApiKey> {
        await this.projectAccess.ensureProjectIsAccessible(ownerId, projectId);

        return this.getApiKeyForProject(projectId, apiKeyId);
    }

    async revokeApiKey(
        ownerId: ApiKeyOwnerId,
        projectId: ApiKeyProjectId,
        apiKeyId: ApiKeyId,
    ): Promise<ApiKey> {
        await this.projectAccess.ensureProjectIsAccessible(ownerId, projectId);

        const apiKey = await this.getApiKeyForProject(projectId, apiKeyId);

        apiKey.revoke();

        await this.apiKeyRepository.update(apiKey);

        return apiKey;
    }

    async assignEndpointPermission(
        ownerId: ApiKeyOwnerId,
        projectId: ApiKeyProjectId,
        apiKeyId: ApiKeyId,
        endpointId: ApiKeyProjectEndpointId,
    ): Promise<ApiKeyEndpointPermission> {
        await this.projectAccess.ensureEndpointIsAccessible(
            ownerId,
            projectId,
            endpointId,
        );

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
        ownerId: ApiKeyOwnerId,
        projectId: ApiKeyProjectId,
        apiKeyId: ApiKeyId,
        endpointId: ApiKeyProjectEndpointId,
    ): Promise<void> {
        await this.projectAccess.ensureEndpointIsAccessible(
            ownerId,
            projectId,
            endpointId,
        );

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
        ownerId: ApiKeyOwnerId,
        projectId: ApiKeyProjectId,
        apiKeyId: ApiKeyId,
    ): Promise<ApiKeyEndpointPermission[]> {
        await this.projectAccess.ensureProjectIsAccessible(ownerId, projectId);

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