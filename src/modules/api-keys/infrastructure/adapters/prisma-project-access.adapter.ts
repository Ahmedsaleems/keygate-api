import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../lib/database/prisma.service';
import { ApiKeyProjectEndpointNotAccessibleError } from '../../application/error';
import { ApiKeyProjectNotAccessibleError } from '../../application/error';
import { ApiKeyProjectAccessPort } from '../../application/project-access.port';
import { ApiKeyOwnerId } from '../../domain/owner-id.vo';
import { ApiKeyProjectEndpointId } from '../../domain/project-endpoint-id.vo';
import { ApiKeyProjectId } from '../../domain/project-id.vo';

@Injectable()
export class PrismaApiKeyProjectAccessAdapter
  implements ApiKeyProjectAccessPort
{
  constructor(private readonly prisma: PrismaService) {}

  async ensureProjectIsAccessible(
    ownerId: ApiKeyOwnerId,
    projectId: ApiKeyProjectId,
  ): Promise<void> {
    const count = await this.prisma.project.count({
      where: {
        id: projectId.toString(),
        ownerId: ownerId.toString(),
      },
    });

    if (count === 0) {
      throw new ApiKeyProjectNotAccessibleError();
    }
  }

  async ensureEndpointIsAccessible(
    ownerId: ApiKeyOwnerId,
    projectId: ApiKeyProjectId,
    endpointId: ApiKeyProjectEndpointId,
  ): Promise<void> {
    const count = await this.prisma.projectEndpoint.count({
      where: {
        id: endpointId.toString(),
        projectId: projectId.toString(),
        project: {
          ownerId: ownerId.toString(),
        },
      },
    });

    if (count === 0) {
      throw new ApiKeyProjectEndpointNotAccessibleError();
    }
  }
}