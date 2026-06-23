import { ApiKeyEndpointPermission } from '../../../domain/endpoint-permission.entity';

export class ApiKeyEndpointPermissionResponseDto {
  id!: string;
  apiKeyId!: string;
  projectId!: string;
  endpointId!: string;
  createdAt!: string;

  static fromDomain(
    permission: ApiKeyEndpointPermission,
  ): ApiKeyEndpointPermissionResponseDto {
    return {
      id: permission.getId().toString(),
      apiKeyId: permission.getApiKeyId().toString(),
      projectId: permission.getProjectId().toString(),
      endpointId: permission.getEndpointId().toString(),
      createdAt: permission.getCreatedAt().toISOString(),
    };
  }

  static fromDomainList(
    permissions: ApiKeyEndpointPermission[],
  ): ApiKeyEndpointPermissionResponseDto[] {
    return permissions.map((permission) => this.fromDomain(permission));
  }
}