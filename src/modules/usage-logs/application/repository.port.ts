import { PreparedCursorPagination } from 'src/lib/pagination';
import { UsageLog } from '../domain/usage-log.entity';
import { UsageLogId } from '../domain/id.vo';
import { UsageLogProjectId } from '../domain/project-id.vo';
import { UsageLogCursorPayload } from './types';
import { UsageLogFilters } from './types';

export const USAGE_LOG_REPOSITORY_PORT = Symbol(
    'USAGE_LOG_REPOSITORY_PORT',
);

export interface UsageLogRepositoryPort {
    create(usageLog: UsageLog): Promise<void>;

    findByIdAndProjectId(
        usageLogId: UsageLogId,
        projectId: UsageLogProjectId,
    ): Promise<UsageLog | null>;

    findByProjectId(
        projectId: UsageLogProjectId,
        filters: UsageLogFilters,
        pagination: PreparedCursorPagination<UsageLogCursorPayload>,
    ): Promise<UsageLog[]>;
}