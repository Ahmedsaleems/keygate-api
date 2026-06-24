import {
  ProjectAccessCheckParams,
  ProjectEndpointAccessCheckParams,
} from './project-access.public.types';

export const PROJECT_ACCESS_PUBLIC_PORT = Symbol(
  'PROJECT_ACCESS_PUBLIC_PORT',
);

export interface ProjectAccessPublicPort {
  canAccessProject(params: ProjectAccessCheckParams): Promise<boolean>;

  canAccessEndpoint(
    params: ProjectEndpointAccessCheckParams,
  ): Promise<boolean>;
}