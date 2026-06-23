import { ApiKeyEndpointPermissionId } from './endpoint-permission-id.vo';
import { ApiKeyId } from './api-key-id.vo';
import { ApiKeyProjectEndpointId } from './project-endpoint-id.vo';
import { ApiKeyProjectId } from './project-id.vo';

type CreateApiKeyEndpointPermissionProps = {
  apiKeyId: ApiKeyId;
  projectId: ApiKeyProjectId;
  endpointId: ApiKeyProjectEndpointId;
};

type RehydrateApiKeyEndpointPermissionProps = {
  id: ApiKeyEndpointPermissionId;
  apiKeyId: ApiKeyId;
  projectId: ApiKeyProjectId;
  endpointId: ApiKeyProjectEndpointId;
  createdAt: Date;
};

export class ApiKeyEndpointPermission {
  private constructor(
    private readonly id: ApiKeyEndpointPermissionId,
    private readonly apiKeyId: ApiKeyId,
    private readonly projectId: ApiKeyProjectId,
    private readonly endpointId: ApiKeyProjectEndpointId,
    private readonly createdAt: Date,
  ) {}

  static create(
    props: CreateApiKeyEndpointPermissionProps,
  ): ApiKeyEndpointPermission {
    return new ApiKeyEndpointPermission(
      ApiKeyEndpointPermissionId.create(),
      props.apiKeyId,
      props.projectId,
      props.endpointId,
      new Date(),
    );
  }

  static rehydrate(
    props: RehydrateApiKeyEndpointPermissionProps,
  ): ApiKeyEndpointPermission {
    return new ApiKeyEndpointPermission(
      props.id,
      props.apiKeyId,
      props.projectId,
      props.endpointId,
      props.createdAt,
    );
  }

  belongsToApiKey(apiKeyId: ApiKeyId): boolean {
    return this.apiKeyId.equals(apiKeyId);
  }

  belongsToProject(projectId: ApiKeyProjectId): boolean {
    return this.projectId.equals(projectId);
  }

  matchesEndpoint(endpointId: ApiKeyProjectEndpointId): boolean {
    return this.endpointId.equals(endpointId);
  }

  getId(): ApiKeyEndpointPermissionId {
    return this.id;
  }

  getApiKeyId(): ApiKeyId {
    return this.apiKeyId;
  }

  getProjectId(): ApiKeyProjectId {
    return this.projectId;
  }

  getEndpointId(): ApiKeyProjectEndpointId {
    return this.endpointId;
  }

  getCreatedAt(): Date {
    return this.createdAt;
  }
}