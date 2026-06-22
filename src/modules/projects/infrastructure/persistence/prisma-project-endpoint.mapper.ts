import {
  EndpointMethod as PrismaEndpointMethod,
  EndpointStatus as PrismaEndpointStatus,
  ProjectEndpoint as PrismaProjectEndpoint,
} from '../../../../lib/prisma/generated';
import { ProjectEndpoint } from '../../domain/project-endpoint.entity';
import { EndpointMethod } from '../../domain/endpoint-method.vo';
import { EndpointPath } from '../../domain/endpoint-path.vo';
import { EndpointStatus } from '../../domain/endpoint-status.vo';
import { ProjectEndpointId } from '../../domain/project-endpoint-id.vo';
import { ProjectId } from '../../domain/project-id.vo';
import { UpstreamUrl } from '../../domain/upstream-url.vo';

type ProjectEndpointPersistence = {
  id: string;
  projectId: string;
  method: PrismaEndpointMethod;
  path: string;
  upstreamUrl: string;
  status: PrismaEndpointStatus;
  createdAt: Date;
  updatedAt: Date;
};

export class PrismaProjectEndpointMapper {
  static toDomain(record: PrismaProjectEndpoint): ProjectEndpoint {
    return ProjectEndpoint.rehydrate({
      id: ProjectEndpointId.fromString(record.id),
      projectId: ProjectId.fromString(record.projectId),
      method: EndpointMethod.create(record.method),
      path: EndpointPath.create(record.path),
      upstreamUrl: UpstreamUrl.create(record.upstreamUrl),
      status: EndpointStatus.create(record.status),
      createdAt: record.createdAt,
      updatedAt: record.updatedAt,
    });
  }

  static toPersistence(
    endpoint: ProjectEndpoint,
  ): ProjectEndpointPersistence {
    return {
      id: endpoint.getId().toString(),
      projectId: endpoint.getProjectId().toString(),
      method: endpoint.getMethod().toString() as PrismaEndpointMethod,
      path: endpoint.getPath().toString(),
      upstreamUrl: endpoint.getUpstreamUrl().toString(),
      status: endpoint.getStatus().toString() as PrismaEndpointStatus,
      createdAt: endpoint.getCreatedAt(),
      updatedAt: endpoint.getUpdatedAt(),
    };
  }
}