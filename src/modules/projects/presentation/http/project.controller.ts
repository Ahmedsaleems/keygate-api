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
import { ProjectDescription } from '../../domain/project-description.vo';
import { ProjectId } from '../../domain/project-id.vo';
import { ProjectName } from '../../domain/project-name.vo';
import { ProjectOwnerId } from '../../domain/project-owner-id.vo';
import { CreateProjectRequestDto } from './dto/project.request.dto';
import { ProjectResponseDto } from './dto/project.response.dto';
import { UpdateProjectRequestDto } from './dto/project.request.dto';

@Controller('projects')
@UseGuards(JwtAuthGuard)
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Post()
  async createProject(
    @CurrentUser() currentUser: AuthenticatedUser,
    @Body() dto: CreateProjectRequestDto,
  ): Promise<ProjectResponseDto> {
    const ownerId = ProjectOwnerId.fromString(currentUser.subject);
    const name = ProjectName.create(dto.name);
    const description = ProjectDescription.createOptional(dto.description);

    const project = await this.projectsService.createProject(
      ownerId,
      name,
      description,
    );

    return ProjectResponseDto.fromDomain(project);
  }

  @Get()
  async listProjects(
    @CurrentUser() currentUser: AuthenticatedUser,
  ): Promise<ProjectResponseDto[]> {
    const ownerId = ProjectOwnerId.fromString(currentUser.subject);

    const projects = await this.projectsService.listProjects(ownerId);

    return ProjectResponseDto.fromDomainList(projects);
  }

  @Get(':projectId')
  async getProject(
    @CurrentUser() currentUser: AuthenticatedUser,
    @Param('projectId') projectIdParam: string,
  ): Promise<ProjectResponseDto> {
    const ownerId = ProjectOwnerId.fromString(currentUser.subject);
    const projectId = ProjectId.fromString(projectIdParam);

    const project = await this.projectsService.getProject(ownerId, projectId);

    return ProjectResponseDto.fromDomain(project);
  }

  @Patch(':projectId')
  async updateProject(
    @CurrentUser() currentUser: AuthenticatedUser,
    @Param('projectId') projectIdParam: string,
    @Body() dto: UpdateProjectRequestDto,
  ): Promise<ProjectResponseDto> {
    const ownerId = ProjectOwnerId.fromString(currentUser.subject);
    const projectId = ProjectId.fromString(projectIdParam);

    const name =
      dto.name === undefined ? undefined : ProjectName.create(dto.name);

    const description =
      dto.description === undefined
        ? undefined
        : ProjectDescription.createOptional(dto.description);

    const project = await this.projectsService.updateProject(
      ownerId,
      projectId,
      name,
      description,
    );

    return ProjectResponseDto.fromDomain(project);
  }

  @Delete(':projectId')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteProject(
    @CurrentUser() currentUser: AuthenticatedUser,
    @Param('projectId') projectIdParam: string,
  ): Promise<void> {
    const ownerId = ProjectOwnerId.fromString(currentUser.subject);
    const projectId = ProjectId.fromString(projectIdParam);

    await this.projectsService.deleteProject(ownerId, projectId);
  }
}
