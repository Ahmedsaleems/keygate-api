import { ApiKeyHash } from './api-key-hash.vo';
import { ApiKeyId } from './api-key-id.vo';
import { ApiKeyName } from './api-key-name.vo';
import { ApiKeyPrefix } from './api-key-prefix.vo';
import { ApiKeyProjectId } from './project-id.vo';
import { ApiKeyStatus } from './api-key-status.vo';

type CreateApiKeyProps = {
  projectId: ApiKeyProjectId;
  name: ApiKeyName;
  prefix: ApiKeyPrefix;
  keyHash: ApiKeyHash;
};

type RehydrateApiKeyProps = {
  id: ApiKeyId;
  projectId: ApiKeyProjectId;
  name: ApiKeyName;
  prefix: ApiKeyPrefix;
  keyHash: ApiKeyHash;
  status: ApiKeyStatus;
  revokedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
};

export class ApiKey {
  private constructor(
    private readonly id: ApiKeyId,
    private readonly projectId: ApiKeyProjectId,
    private name: ApiKeyName,
    private readonly prefix: ApiKeyPrefix,
    private readonly keyHash: ApiKeyHash,
    private status: ApiKeyStatus,
    private revokedAt: Date | null,
    private readonly createdAt: Date,
    private updatedAt: Date,
  ) {}

  static create(props: CreateApiKeyProps): ApiKey {
    const now = new Date();

    return new ApiKey(
      ApiKeyId.create(),
      props.projectId,
      props.name,
      props.prefix,
      props.keyHash,
      ApiKeyStatus.active(),
      null,
      now,
      now,
    );
  }

  static rehydrate(props: RehydrateApiKeyProps): ApiKey {
    return new ApiKey(
      props.id,
      props.projectId,
      props.name,
      props.prefix,
      props.keyHash,
      props.status,
      props.revokedAt,
      props.createdAt,
      props.updatedAt,
    );
  }

  rename(name: ApiKeyName): void {
    this.name = name;
    this.touch();
  }

  revoke(): void {
    if (this.status.isRevoked()) {
      return;
    }

    this.status = ApiKeyStatus.revoked();
    this.revokedAt = new Date();
    this.touch();
  }

  belongsToProject(projectId: ApiKeyProjectId): boolean {
    return this.projectId.equals(projectId);
  }

  isActive(): boolean {
    return this.status.isActive();
  }

  isRevoked(): boolean {
    return this.status.isRevoked();
  }

  getId(): ApiKeyId {
    return this.id;
  }

  getProjectId(): ApiKeyProjectId {
    return this.projectId;
  }

  getName(): ApiKeyName {
    return this.name;
  }

  getPrefix(): ApiKeyPrefix {
    return this.prefix;
  }

  getKeyHash(): ApiKeyHash {
    return this.keyHash;
  }

  getStatus(): ApiKeyStatus {
    return this.status;
  }

  getRevokedAt(): Date | null {
    return this.revokedAt;
  }

  getCreatedAt(): Date {
    return this.createdAt;
  }

  getUpdatedAt(): Date {
    return this.updatedAt;
  }

  private touch(): void {
    this.updatedAt = new Date();
  }
}