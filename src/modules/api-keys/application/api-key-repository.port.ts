import { ApiKey } from '../domain/api-key.entity';
import { ApiKeyHash } from '../domain/api-key-hash.vo';
import { ApiKeyId } from '../domain/api-key-id.vo';
import { ApiKeyName } from '../domain/api-key-name.vo';
import { ApiKeyProjectId } from '../domain/project-id.vo';

export const API_KEY_REPOSITORY_PORT = Symbol('API_KEY_REPOSITORY_PORT');

export interface ApiKeyRepositoryPort {
  create(apiKey: ApiKey): Promise<void>;

  findById(apiKeyId: ApiKeyId): Promise<ApiKey | null>;

  findByProjectId(projectId: ApiKeyProjectId): Promise<ApiKey[]>;

  findByHash(keyHash: ApiKeyHash): Promise<ApiKey | null>;

  existsByProjectIdAndName(
    projectId: ApiKeyProjectId,
    name: ApiKeyName,
  ): Promise<boolean>;

  update(apiKey: ApiKey): Promise<void>;
}