import { ProjectEndpoint } from '../domain/project-endpoint.entity';
import { EndpointMethod } from '../domain/endpoint-method.vo';
import { EndpointPath } from '../domain/endpoint-path.vo';
import { ProjectEndpointId } from '../domain/project-endpoint-id.vo';
import { ProjectId } from '../domain/project-id.vo';

export const PROJECT_ENDPOINT_REPOSITORY_PORT = Symbol(
  'PROJECT_ENDPOINT_REPOSITORY_PORT',
);

export interface ProjectEndpointRepositoryPort {
  create(endpoint: ProjectEndpoint): Promise<void>;

  findById(endpointId: ProjectEndpointId): Promise<ProjectEndpoint | null>;

  findByProjectId(projectId: ProjectId): Promise<ProjectEndpoint[]>;

  existsByProjectIdMethodAndPath(
    projectId: ProjectId,
    method: EndpointMethod,
    path: EndpointPath,
  ): Promise<boolean>;

  update(endpoint: ProjectEndpoint): Promise<void>;

  delete(endpointId: ProjectEndpointId): Promise<void>;
}