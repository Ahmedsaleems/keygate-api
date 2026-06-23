import { ApiKey } from '../../../domain/api-key.entity';

export class ApiKeyResponseDto {
  id!: string;
  projectId!: string;
  name!: string;
  prefix!: string;
  status!: string;
  revokedAt!: string | null;
  createdAt!: string;
  updatedAt!: string;

  static fromDomain(apiKey: ApiKey): ApiKeyResponseDto {
    return {
      id: apiKey.getId().toString(),
      projectId: apiKey.getProjectId().toString(),
      name: apiKey.getName().toString(),
      prefix: apiKey.getPrefix().toString(),
      status: apiKey.getStatus().toString(),
      revokedAt: apiKey.getRevokedAt()?.toISOString() ?? null,
      createdAt: apiKey.getCreatedAt().toISOString(),
      updatedAt: apiKey.getUpdatedAt().toISOString(),
    };
  }

  static fromDomainList(apiKeys: ApiKey[]): ApiKeyResponseDto[] {
    return apiKeys.map((apiKey) => this.fromDomain(apiKey));
  }
}