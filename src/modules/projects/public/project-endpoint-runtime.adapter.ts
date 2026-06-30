import { Injectable } from '@nestjs/common';
import {
  InvalidEndpointMethodError,
  InvalidEndpointPathError,
  InvalidProjectIdError,
} from '../domain/error';
import { ProjectsService } from '../application/projects.service';
import { EndpointMethod } from '../domain/endpoint-method.vo';
import { EndpointPath } from '../domain/endpoint-path.vo';
import { ProjectId } from '../domain/project-id.vo';
import { ProjectEndpointRuntimePublicPort } from './project-endpoint-runtime.public.port';
import {
  RuntimeProjectEndpointResolveParams,
  RuntimeResolvedProjectEndpoint,
} from './project-endpoint-runtime.public.types';

@Injectable()
export class ProjectEndpointRuntimePublicAdapter implements ProjectEndpointRuntimePublicPort {
  constructor(private readonly projectsService: ProjectsService) {}

  async resolveEndpoint(
    params: RuntimeProjectEndpointResolveParams,
  ): Promise<RuntimeResolvedProjectEndpoint | null> {
    let projectId: ProjectId;
    let method: EndpointMethod;
    let requestPath: EndpointPath;

    try {
      projectId = ProjectId.fromString(params.projectId);
      method = EndpointMethod.create(params.method);
      requestPath = EndpointPath.create(params.path);
    } catch (error: unknown) {
      if (
        error instanceof InvalidProjectIdError ||
        error instanceof InvalidEndpointMethodError ||
        error instanceof InvalidEndpointPathError
      ) {
        return null;
      }

      throw error;
    }

    const endpoint = await this.projectsService.resolveEndpoint(
      projectId,
      method,
      requestPath,
    );

    if (!endpoint) {
      return null;
    }

    const pathParams = endpoint.getPath().extractPathParams(requestPath);


    return {
      endpointId: endpoint.getId().toString(),
      projectId: endpoint.getProjectId().toString(),
      method: endpoint.getMethod().toString(),
      registeredPath: endpoint.getPath().toString(),
      requestPath: requestPath.toString(),
      upstreamUrl: endpoint.getUpstreamUrl().toString(),
      resolvedUpstreamUrl: endpoint.getUpstreamUrl().resolveUpstreamUrl(pathParams),
      status: endpoint.getStatus().toString(),
      pathParams: pathParams,
    };
  }
}
