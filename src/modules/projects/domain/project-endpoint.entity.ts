import { EndpointMethod } from './endpoint-method.vo';
import { EndpointPath } from './endpoint-path.vo';
import { EndpointStatus } from './endpoint-status.vo';
import { InvalidEndpointUpstreamParametersError } from './error';
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
    this.ensureUpstreamParametersAreAvailable(props.path, props.upstreamUrl);

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
    this.ensureUpstreamParametersAreAvailable(props.path, props.upstreamUrl);

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
    const finalPath = props.path ?? this.path;
    const finalUpstreamUrl = props.upstreamUrl ?? this.upstreamUrl;

    ProjectEndpoint.ensureUpstreamParametersAreAvailable(
      finalPath,
      finalUpstreamUrl,
    );

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

  private static ensureUpstreamParametersAreAvailable(
    path: EndpointPath,
    upstreamUrl: UpstreamUrl,
  ): void {
    const pathParameters = new Set(path.getParameterNames());
    const unavailableParameters = [
      ...new Set(
        upstreamUrl
          .getParameterNames()
          .filter((parameterName) => !pathParameters.has(parameterName)),
      ),
    ];

    if (unavailableParameters.length === 0) {
      return;
    }

    throw new InvalidEndpointUpstreamParametersError(
      path.toString(),
      upstreamUrl.toString(),
      unavailableParameters,
    );
  }

  resolutionPriority(other: ProjectEndpoint): number {
    const leftSegments = this.toSegments(this.path.toString());
    const rightSegments = this.toSegments(other.path.toString());

    const staticSegmentDifference =
      this.countStaticSegments(rightSegments) -
      this.countStaticSegments(leftSegments);

    if (staticSegmentDifference !== 0) {
      return staticSegmentDifference;
    }

    for (let index = 0; index < leftSegments.length; index += 1) {
      const leftIsStatic = !this.isParameterSegment(leftSegments[index] ?? '');
      const rightIsStatic = !this.isParameterSegment(
        rightSegments[index] ?? '',
      );

      if (leftIsStatic && !rightIsStatic) {
        return -1;
      }

      if (!leftIsStatic && rightIsStatic) {
        return 1;
      }
    }

    const createdAtDifference =
      this.createdAt.getTime() - other.createdAt.getTime();

    if (createdAtDifference !== 0) {
      return createdAtDifference;
    }

    return this.id.toString().localeCompare(other.getId().toString());
  }

  private toSegments(value: string): string[] {
    return value === '/' ? [] : value.slice(1).split('/');
  }

  private countStaticSegments(segments: string[]): number {
    return segments.filter((segment) => !this.isParameterSegment(segment))
      .length;
  }

  private isParameterSegment(segment: string): boolean {
    return segment.startsWith(':');
  }
}
