import { EndpointMethod } from './endpoint-method.vo';
import { EndpointPath } from './endpoint-path.vo';
import { EndpointStatus } from './endpoint-status.vo';
import { ProjectEndpointId } from './project-endpoint-id.vo';
import { ProjectId } from './project-id.vo';
import { UpstreamUrl } from './upstream-url.vo';

type CreateProjectEndpointProps = {
  projectId: ProjectId;
  method: EndpointMethod;
  path: EndpointPath;
  upstreamUrl: UpstreamUrl;
};

type RehydrateProjectEndpointProps = {
  id: ProjectEndpointId;
  projectId: ProjectId;
  method: EndpointMethod;
  path: EndpointPath;
  upstreamUrl: UpstreamUrl;
  status: EndpointStatus;
  createdAt: Date;
  updatedAt: Date;
};

type UpdateProjectEndpointProps = {
  method?: EndpointMethod;
  path?: EndpointPath;
  upstreamUrl?: UpstreamUrl;
};

export class ProjectEndpoint {
  private constructor(
    private readonly id: ProjectEndpointId,
    private readonly projectId: ProjectId,
    private method: EndpointMethod,
    private path: EndpointPath,
    private upstreamUrl: UpstreamUrl,
    private status: EndpointStatus,
    private readonly createdAt: Date,
    private updatedAt: Date,
  ) {}

  static create(props: CreateProjectEndpointProps): ProjectEndpoint {
    const now = new Date();

    return new ProjectEndpoint(
      ProjectEndpointId.create(),
      props.projectId,
      props.method,
      props.path,
      props.upstreamUrl,
      EndpointStatus.enabled(),
      now,
      now,
    );
  }

  static rehydrate(props: RehydrateProjectEndpointProps): ProjectEndpoint {
    return new ProjectEndpoint(
      props.id,
      props.projectId,
      props.method,
      props.path,
      props.upstreamUrl,
      props.status,
      props.createdAt,
      props.updatedAt,
    );
  }

  update(props: UpdateProjectEndpointProps): void {
    if (props.method) {
      this.method = props.method;
    }

    if (props.path) {
      this.path = props.path;
    }

    if (props.upstreamUrl) {
      this.upstreamUrl = props.upstreamUrl;
    }

    this.touch();
  }

  enable(): void {
    this.status = EndpointStatus.enabled();
    this.touch();
  }

  disable(): void {
    this.status = EndpointStatus.disabled();
    this.touch();
  }

  belongsToProject(projectId: ProjectId): boolean {
    return this.projectId.equals(projectId);
  }

  getId(): ProjectEndpointId {
    return this.id;
  }

  getProjectId(): ProjectId {
    return this.projectId;
  }

  getMethod(): EndpointMethod {
    return this.method;
  }

  getPath(): EndpointPath {
    return this.path;
  }

  getUpstreamUrl(): UpstreamUrl {
    return this.upstreamUrl;
  }

  getStatus(): EndpointStatus {
    return this.status;
  }

  getCreatedAt(): Date {
    return this.createdAt;
  }

  getUpdatedAt(): Date {
    return this.updatedAt;
  }

  private touch(): void {
    this.updatedAt = new Date();
  }
}