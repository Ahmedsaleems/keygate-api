import { ApplicationError } from 'src/lib/errors/application.error';

export class ProjectNotFoundError extends ApplicationError {
  readonly code = 'PROJECT_NOT_FOUND';

  constructor(projectId: string) {
    super('Project was not found.', {
      projectId,
    });
  }
}

export class ProjectAccessDeniedError extends ApplicationError {
  readonly code = 'PROJECT_ACCESS_DENIED';

  constructor(projectId: string, ownerId: string) {
    super('You do not have access to this project.', {
      projectId,
      ownerId,
    });
  }
}

export class ProjectOwnerNotFoundError extends ApplicationError {
  readonly code = 'PROJECT_OWNER_NOT_FOUND';

  constructor(ownerId: string) {
    super('Project owner was not found.', {
      ownerId,
    });
  }
}

export class ProjectAlreadyExistsError extends ApplicationError {
  readonly code = 'PROJECT_ALREADY_EXISTS';

  constructor(ownerId: string, name: string) {
    super('Project with this name already exists for this owner.', {
      ownerId,
      name,
    });
  }
}

export class ProjectEndpointNotFoundError extends ApplicationError {
  readonly code = 'PROJECT_ENDPOINT_NOT_FOUND';

  constructor(endpointId: string) {
    super('Project endpoint was not found.', {
      endpointId,
    });
  }
}

export class ProjectEndpointAlreadyExistsError extends ApplicationError {
  readonly code = 'PROJECT_ENDPOINT_ALREADY_EXISTS';

  constructor(projectId: string, method: string, path: string) {
    super('Project endpoint with this method and path already exists.', {
      projectId,
      method,
      path,
    });
  }
}

export class ProjectEndpointRouteShapeAlreadyExistsError extends ApplicationError {
  readonly code = 'PROJECT_ENDPOINT_ROUTE_SHAPE_ALREADY_EXISTS';

  constructor(
    projectId: string,
    method: string,
    path: string,
    routeShape: string,
    conflictingPath: string,
  ) {
    super('Project endpoint with this method and route shape already exists.', {
      projectId,
      method,
      path,
      routeShape,
      conflictingPath,
    });
  }
}