import { ProjectEndpointRepositoryPort } from './project-endpoint-repository.port';
import { ProjectRepositoryPort } from './project-repository.port';
import { ProjectAccessDeniedError } from './error';
import { ProjectAlreadyExistsError } from './error';
import { ProjectEndpointAlreadyExistsError } from './error';
import { ProjectEndpointNotFoundError } from './error';
import { ProjectNotFoundError } from './error';
import { ProjectEndpoint } from '../domain/project-endpoint.entity';
import { Project } from '../domain/project.entity';
import { EndpointMethod } from '../domain/endpoint-method.vo';
import { EndpointPath } from '../domain/endpoint-path.vo';
import { ProjectDescription } from '../domain/project-description.vo';
import { ProjectEndpointId } from '../domain/project-endpoint-id.vo';
import { ProjectId } from '../domain/project-id.vo';
import { ProjectName } from '../domain/project-name.vo';
import { ProjectOwnerId } from '../domain/project-owner-id.vo';
import { UpstreamUrl } from '../domain/upstream-url.vo';

export class ProjectsService {
  constructor(
    private readonly projectRepository: ProjectRepositoryPort,
    private readonly projectEndpointRepository: ProjectEndpointRepositoryPort,
  ) {}

  async createProject(
    ownerId: ProjectOwnerId,
    name: ProjectName,
    description: ProjectDescription | null,
  ): Promise<Project> {
    const projectExists = await this.projectRepository.existsByOwnerIdAndName(
      ownerId,
      name,
    );

    if (projectExists) {
      throw new ProjectAlreadyExistsError(ownerId.toString(), name.toString());
    }

    const project = Project.create({
      ownerId,
      name,
      description,
    });

    await this.projectRepository.create(project);

    return project;
  }

  async listProjects(ownerId: ProjectOwnerId): Promise<Project[]> {
    return this.projectRepository.findByOwnerId(ownerId);
  }

  async getProject(
    ownerId: ProjectOwnerId,
    projectId: ProjectId,
  ): Promise<Project> {
    return this.getProjectForOwner(ownerId, projectId);
  }

  async updateProject(
    ownerId: ProjectOwnerId,
    projectId: ProjectId,
    name?: ProjectName,
    description?: ProjectDescription | null,
  ): Promise<Project> {
    const project = await this.getProjectForOwner(ownerId, projectId);

    if (name && !project.getName().equals(name)) {
      const projectExists =
        await this.projectRepository.existsByOwnerIdAndName(ownerId, name);

      if (projectExists) {
        throw new ProjectAlreadyExistsError(
          ownerId.toString(),
          name.toString(),
        );
      }

      project.rename(name);
    }

    if (description !== undefined) {
      project.updateDescription(description);
    }

    await this.projectRepository.update(project);

    return project;
  }

  async deleteProject(
    ownerId: ProjectOwnerId,
    projectId: ProjectId,
  ): Promise<void> {
    await this.getProjectForOwner(ownerId, projectId);

    await this.projectRepository.delete(projectId);
  }

  async registerEndpoint(
    ownerId: ProjectOwnerId,
    projectId: ProjectId,
    method: EndpointMethod,
    path: EndpointPath,
    upstreamUrl: UpstreamUrl,
  ): Promise<ProjectEndpoint> {
    await this.getProjectForOwner(ownerId, projectId);

    const endpointExists =
      await this.projectEndpointRepository.existsByProjectIdMethodAndPath(
        projectId,
        method,
        path,
      );

    if (endpointExists) {
      throw new ProjectEndpointAlreadyExistsError(
        projectId.toString(),
        method.toString(),
        path.toString(),
      );
    }

    const endpoint = ProjectEndpoint.create({
      projectId,
      method,
      path,
      upstreamUrl,
    });

    await this.projectEndpointRepository.create(endpoint);

    return endpoint;
  }

  async listEndpoints(
    ownerId: ProjectOwnerId,
    projectId: ProjectId,
  ): Promise<ProjectEndpoint[]> {
    await this.getProjectForOwner(ownerId, projectId);

    return this.projectEndpointRepository.findByProjectId(projectId);
  }

  async getEndpoint(
    ownerId: ProjectOwnerId,
    projectId: ProjectId,
    endpointId: ProjectEndpointId,
  ): Promise<ProjectEndpoint> {
    await this.getProjectForOwner(ownerId, projectId);

    return this.getEndpointForProject(projectId, endpointId);
  }

  async updateEndpoint(
    ownerId: ProjectOwnerId,
    projectId: ProjectId,
    endpointId: ProjectEndpointId,
    method?: EndpointMethod,
    path?: EndpointPath,
    upstreamUrl?: UpstreamUrl,
  ): Promise<ProjectEndpoint> {
    await this.getProjectForOwner(ownerId, projectId);

    const endpoint = await this.getEndpointForProject(projectId, endpointId);

    const finalMethod = method ?? endpoint.getMethod();
    const finalPath = path ?? endpoint.getPath();

    const methodOrPathChanged =
      !endpoint.getMethod().equals(finalMethod) ||
      !endpoint.getPath().equals(finalPath);

    if (methodOrPathChanged) {
      const endpointExists =
        await this.projectEndpointRepository.existsByProjectIdMethodAndPath(
          projectId,
          finalMethod,
          finalPath,
        );

      if (endpointExists) {
        throw new ProjectEndpointAlreadyExistsError(
          projectId.toString(),
          finalMethod.toString(),
          finalPath.toString(),
        );
      }
    }

    endpoint.update({
      method,
      path,
      upstreamUrl,
    });

    await this.projectEndpointRepository.update(endpoint);

    return endpoint;
  }

  async enableEndpoint(
    ownerId: ProjectOwnerId,
    projectId: ProjectId,
    endpointId: ProjectEndpointId,
  ): Promise<ProjectEndpoint> {
    await this.getProjectForOwner(ownerId, projectId);

    const endpoint = await this.getEndpointForProject(projectId, endpointId);

    endpoint.enable();

    await this.projectEndpointRepository.update(endpoint);

    return endpoint;
  }

  async disableEndpoint(
    ownerId: ProjectOwnerId,
    projectId: ProjectId,
    endpointId: ProjectEndpointId,
  ): Promise<ProjectEndpoint> {
    await this.getProjectForOwner(ownerId, projectId);

    const endpoint = await this.getEndpointForProject(projectId, endpointId);

    endpoint.disable();

    await this.projectEndpointRepository.update(endpoint);

    return endpoint;
  }

  async deleteEndpoint(
    ownerId: ProjectOwnerId,
    projectId: ProjectId,
    endpointId: ProjectEndpointId,
  ): Promise<void> {
    await this.getProjectForOwner(ownerId, projectId);

    await this.getEndpointForProject(projectId, endpointId);

    await this.projectEndpointRepository.delete(endpointId);
  }

  private async getProjectForOwner(
    ownerId: ProjectOwnerId,
    projectId: ProjectId,
  ): Promise<Project> {
    const project = await this.projectRepository.findById(projectId);

    if (!project) {
      throw new ProjectNotFoundError(projectId.toString());
    }

    if (!project.isOwnedBy(ownerId)) {
      throw new ProjectAccessDeniedError(
        projectId.toString(),
        ownerId.toString(),
      );
    }

    return project;
  }

  private async getEndpointForProject(
    projectId: ProjectId,
    endpointId: ProjectEndpointId,
  ): Promise<ProjectEndpoint> {
    const endpoint = await this.projectEndpointRepository.findById(endpointId);

    if (!endpoint || !endpoint.belongsToProject(projectId)) {
      throw new ProjectEndpointNotFoundError(endpointId.toString());
    }

    return endpoint;
  }
}