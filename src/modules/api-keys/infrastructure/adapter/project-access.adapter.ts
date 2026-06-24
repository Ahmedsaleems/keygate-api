import { Inject, Injectable } from '@nestjs/common';
import {
  PROJECT_ACCESS_PUBLIC_PORT,
  type ProjectAccessPublicPort,
} from 'src/modules/projects/public';
import { ApiKeyProjectEndpointNotAccessibleError } from '../../application/error';
import { ApiKeyProjectNotAccessibleError } from '../../application/error';
import { ApiKeyProjectAccessPort } from '../../application/project-access.port';
import { ApiKeyOwnerId } from '../../domain/owner-id.vo';
import { ApiKeyProjectEndpointId } from '../../domain/project-endpoint-id.vo';
import { ApiKeyProjectId } from '../../domain/project-id.vo';

@Injectable()
export class ProjectAccessAdapter
  implements ApiKeyProjectAccessPort
{
  constructor(
    @Inject(PROJECT_ACCESS_PUBLIC_PORT)
    private readonly projectAccess: ProjectAccessPublicPort,
  ) {}

  async ensureProjectIsAccessible(
    ownerId: ApiKeyOwnerId,
    projectId: ApiKeyProjectId,
  ): Promise<void> {
    const canAccess = await this.projectAccess.canAccessProject({
      ownerId: ownerId.toString(),
      projectId: projectId.toString(),
    });

    if (!canAccess) {
      throw new ApiKeyProjectNotAccessibleError();
    }
  }

  async ensureEndpointIsAccessible(
    ownerId: ApiKeyOwnerId,
    projectId: ApiKeyProjectId,
    endpointId: ApiKeyProjectEndpointId,
  ): Promise<void> {
    const canAccess = await this.projectAccess.canAccessEndpoint({
      ownerId: ownerId.toString(),
      projectId: projectId.toString(),
      endpointId: endpointId.toString(),
    });

    if (!canAccess) {
      throw new ApiKeyProjectEndpointNotAccessibleError();
    }
  }
}