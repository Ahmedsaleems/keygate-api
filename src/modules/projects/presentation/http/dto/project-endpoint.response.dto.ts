import { ProjectEndpoint } from '../../../domain/project-endpoint.entity';

export class ProjectEndpointResponseDto {
  id!: string;
  projectId!: string;
  method!: string;
  path!: string;
  upstreamUrl!: string;
  status!: string;
  createdAt!: string;
  updatedAt!: string;

  static fromDomain(endpoint: ProjectEndpoint): ProjectEndpointResponseDto {
    return {
      id: endpoint.getId().toString(),
      projectId: endpoint.getProjectId().toString(),
      method: endpoint.getMethod().toString(),
      path: endpoint.getPath().toString(),
      upstreamUrl: endpoint.getUpstreamUrl().toString(),
      status: endpoint.getStatus().toString(),
      createdAt: endpoint.getCreatedAt().toISOString(),
      updatedAt: endpoint.getUpdatedAt().toISOString(),
    };
  }

  static fromDomainList(
    endpoints: ProjectEndpoint[],
  ): ProjectEndpointResponseDto[] {
    return endpoints.map((endpoint) => this.fromDomain(endpoint));
  }
}