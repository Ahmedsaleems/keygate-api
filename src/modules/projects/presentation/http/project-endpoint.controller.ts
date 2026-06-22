import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import type { AuthenticatedUser } from 'src/lib/auth/authenticated-user';
import { CurrentUser } from 'src/lib/auth/current-user.decorator';
import { JwtAuthGuard } from 'src/lib/auth/jwt-auth.guard';
import { ProjectsService } from '../../application/projects.service';
import { EndpointMethod } from '../../domain/endpoint-method.vo';
import { EndpointPath } from '../../domain/endpoint-path.vo';
import { ProjectEndpointId } from '../../domain/project-endpoint-id.vo';
import { ProjectId } from '../../domain/project-id.vo';
import { ProjectOwnerId } from '../../domain/project-owner-id.vo';
import { UpstreamUrl } from '../../domain/upstream-url.vo';
import { CreateProjectEndpointRequestDto } from './dto/project-endpoint.request.dto';
import { ProjectEndpointResponseDto } from './dto/project-endpoint.response.dto';
import { UpdateProjectEndpointRequestDto } from './dto/project-endpoint.request.dto';

@Controller('projects/:projectId/endpoints')
@UseGuards(JwtAuthGuard)
export class ProjectEndpointsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Post()
  async registerEndpoint(
    @CurrentUser() currentUser: AuthenticatedUser,
    @Param('projectId') projectIdParam: string,
    @Body() dto: CreateProjectEndpointRequestDto,
  ): Promise<ProjectEndpointResponseDto> {
    const ownerId = ProjectOwnerId.fromString(currentUser.subject);
    const projectId = ProjectId.fromString(projectIdParam);
    const method = EndpointMethod.create(dto.method);
    const path = EndpointPath.create(dto.path);
    const upstreamUrl = UpstreamUrl.create(dto.upstreamUrl);

    const endpoint = await this.projectsService.registerEndpoint(
      ownerId,
      projectId,
      method,
      path,
      upstreamUrl,
    );

    return ProjectEndpointResponseDto.fromDomain(endpoint);
  }

  @Get()
  async listEndpoints(
    @CurrentUser() currentUser: AuthenticatedUser,
    @Param('projectId') projectIdParam: string,
  ): Promise<ProjectEndpointResponseDto[]> {
    const ownerId = ProjectOwnerId.fromString(currentUser.subject);
    const projectId = ProjectId.fromString(projectIdParam);

    const endpoints = await this.projectsService.listEndpoints(
      ownerId,
      projectId,
    );

    return ProjectEndpointResponseDto.fromDomainList(endpoints);
  }

  @Get(':endpointId')
  async getEndpoint(
    @CurrentUser() currentUser: AuthenticatedUser,
    @Param('projectId') projectIdParam: string,
    @Param('endpointId') endpointIdParam: string,
  ): Promise<ProjectEndpointResponseDto> {
    const ownerId = ProjectOwnerId.fromString(currentUser.subject);
    const projectId = ProjectId.fromString(projectIdParam);
    const endpointId = ProjectEndpointId.fromString(endpointIdParam);

    const endpoint = await this.projectsService.getEndpoint(
      ownerId,
      projectId,
      endpointId,
    );

    return ProjectEndpointResponseDto.fromDomain(endpoint);
  }

  @Patch(':endpointId')
  async updateEndpoint(
    @CurrentUser() currentUser: AuthenticatedUser,
    @Param('projectId') projectIdParam: string,
    @Param('endpointId') endpointIdParam: string,
    @Body() dto: UpdateProjectEndpointRequestDto,
  ): Promise<ProjectEndpointResponseDto> {
    const ownerId = ProjectOwnerId.fromString(currentUser.subject);
    const projectId = ProjectId.fromString(projectIdParam);
    const endpointId = ProjectEndpointId.fromString(endpointIdParam);

    const method = dto.method ? EndpointMethod.create(dto.method) : undefined;
    const path = dto.path ? EndpointPath.create(dto.path) : undefined;
    const upstreamUrl = dto.upstreamUrl
      ? UpstreamUrl.create(dto.upstreamUrl)
      : undefined;

    const endpoint = await this.projectsService.updateEndpoint(
      ownerId,
      projectId,
      endpointId,
      method,
      path,
      upstreamUrl,
    );

    return ProjectEndpointResponseDto.fromDomain(endpoint);
  }

  @Patch(':endpointId/enable')
  async enableEndpoint(
    @CurrentUser() currentUser: AuthenticatedUser,
    @Param('projectId') projectIdParam: string,
    @Param('endpointId') endpointIdParam: string,
  ): Promise<ProjectEndpointResponseDto> {
    const ownerId = ProjectOwnerId.fromString(currentUser.subject);
    const projectId = ProjectId.fromString(projectIdParam);
    const endpointId = ProjectEndpointId.fromString(endpointIdParam);

    const endpoint = await this.projectsService.enableEndpoint(
      ownerId,
      projectId,
      endpointId,
    );

    return ProjectEndpointResponseDto.fromDomain(endpoint);
  }

  @Patch(':endpointId/disable')
  async disableEndpoint(
    @CurrentUser() currentUser: AuthenticatedUser,
    @Param('projectId') projectIdParam: string,
    @Param('endpointId') endpointIdParam: string,
  ): Promise<ProjectEndpointResponseDto> {
    const ownerId = ProjectOwnerId.fromString(currentUser.subject);
    const projectId = ProjectId.fromString(projectIdParam);
    const endpointId = ProjectEndpointId.fromString(endpointIdParam);

    const endpoint = await this.projectsService.disableEndpoint(
      ownerId,
      projectId,
      endpointId,
    );

    return ProjectEndpointResponseDto.fromDomain(endpoint);
  }

  @Delete(':endpointId')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteEndpoint(
    @CurrentUser() currentUser: AuthenticatedUser,
    @Param('projectId') projectIdParam: string,
    @Param('endpointId') endpointIdParam: string,
  ): Promise<void> {
    const ownerId = ProjectOwnerId.fromString(currentUser.subject);
    const projectId = ProjectId.fromString(projectIdParam);
    const endpointId = ProjectEndpointId.fromString(endpointIdParam);

    await this.projectsService.deleteEndpoint(ownerId, projectId, endpointId);
  }
}