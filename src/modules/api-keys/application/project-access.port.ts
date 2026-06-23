import { ApiKeyOwnerId } from '../domain/owner-id.vo';
import { ApiKeyProjectEndpointId } from '../domain/project-endpoint-id.vo';
import { ApiKeyProjectId } from '../domain/project-id.vo';

export const API_KEY_PROJECT_ACCESS_PORT = Symbol(
  'API_KEY_PROJECT_ACCESS_PORT',
);

export interface ApiKeyProjectAccessPort {
  ensureProjectIsAccessible(
    ownerId: ApiKeyOwnerId,
    projectId: ApiKeyProjectId,
  ): Promise<void>;

  ensureEndpointIsAccessible(
    ownerId: ApiKeyOwnerId,
    projectId: ApiKeyProjectId,
    endpointId: ApiKeyProjectEndpointId,
  ): Promise<void>;
}