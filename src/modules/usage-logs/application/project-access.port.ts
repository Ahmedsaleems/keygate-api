import { UsageLogProjectOwnerId } from '../domain/project-owner-id.vo';
import { UsageLogProjectId } from '../domain/project-id.vo';

export const USAGE_LOG_PROJECT_ACCESS_PORT = Symbol(
    'USAGE_LOG_PROJECT_ACCESS_PORT',
);

export interface UsageLogProjectAccessPort {
    ensureProjectIsAccessible(
        ownerId: UsageLogProjectOwnerId,
        projectId: UsageLogProjectId,
    ): Promise<void>;
}