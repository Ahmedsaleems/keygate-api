import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../lib/database/prisma.service';
import { ProjectAccessPublicPort } from './project-access.public.port';
import {
  ProjectAccessCheckParams,
  ProjectEndpointAccessCheckParams,
} from './project-access.public.types';

@Injectable()
export class ProjectAccessPublicAdapter implements ProjectAccessPublicPort {
  constructor(private readonly prisma: PrismaService) {}

  async canAccessProject(params: ProjectAccessCheckParams): Promise<boolean> {
    const count = await this.prisma.project.count({
      where: {
        id: params.projectId,
        ownerId: params.ownerId,
      },
    });

    return count > 0;
  }

  async canAccessEndpoint(
    params: ProjectEndpointAccessCheckParams,
  ): Promise<boolean> {
    const count = await this.prisma.projectEndpoint.count({
      where: {
        id: params.endpointId,
        projectId: params.projectId,
        project: {
          ownerId: params.ownerId,
        },
      },
    });

    return count > 0;
  }
}