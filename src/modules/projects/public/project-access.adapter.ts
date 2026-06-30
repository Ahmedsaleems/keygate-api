import { Injectable } from '@nestjs/common';
import { ProjectsService } from '../application/projects.service';
import {
  InvalidProjectEndpointIdError,
  InvalidProjectIdError,
  InvalidProjectOwnerIdError,
} from '../domain/error';
import { ProjectEndpointId } from '../domain/project-endpoint-id.vo';
import { ProjectId } from '../domain/project-id.vo';
import { ProjectOwnerId } from '../domain/project-owner-id.vo';
import { ProjectAccessPublicPort } from './project-access.public.port';
import {
  ProjectAccessCheckParams,
  ProjectEndpointAccessCheckParams,
} from './project-access.public.types';

@Injectable()
export class ProjectAccessPublicAdapter implements ProjectAccessPublicPort {
  constructor(private readonly projectsService: ProjectsService) {}

  async canAccessProject(params: ProjectAccessCheckParams): Promise<boolean> {
    let ownerId: ProjectOwnerId;
    let projectId: ProjectId;

    try {
      ownerId = ProjectOwnerId.fromString(params.ownerId);
      projectId = ProjectId.fromString(params.projectId);
    } catch (error: unknown) {
      if (
        error instanceof InvalidProjectOwnerIdError ||
        error instanceof InvalidProjectIdError
      ) {
        return false;
      }

      throw error;
    }

    return this.projectsService.canAccessProject(ownerId, projectId);
  }

  async canAccessEndpoint(
    params: ProjectEndpointAccessCheckParams,
  ): Promise<boolean> {
    let ownerId: ProjectOwnerId;
    let projectId: ProjectId;
    let endpointId: ProjectEndpointId;

    try {
      ownerId = ProjectOwnerId.fromString(params.ownerId);
      projectId = ProjectId.fromString(params.projectId);
      endpointId = ProjectEndpointId.fromString(params.endpointId);
    } catch (error: unknown) {
      if (
        error instanceof InvalidProjectOwnerIdError ||
        error instanceof InvalidProjectIdError ||
        error instanceof InvalidProjectEndpointIdError
      ) {
        return false;
      }

      throw error;
    }

    return this.projectsService.canAccessEndpoint(
      ownerId,
      projectId,
      endpointId,
    );
  }
}
