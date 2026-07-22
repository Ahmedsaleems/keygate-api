import { Injectable } from '@nestjs/common';
import {
    Prisma,
    UsageLogOutcome as PrismaUsageLogOutcome,
} from '../../../../lib/prisma/generated';
import { PrismaService } from '../../../../lib/database/prisma.service';
import { PreparedCursorPagination } from '../../../../lib/pagination';
import { UsageLogReferenceNotFoundError } from '../../application/error';
import { UsageLogCursorPayload } from '../../application/types';
import {
    UsageLogRepositoryPort,
} from '../../application/repository.port';
import { UsageLogFilters } from '../../application/types';
import { UsageLog } from '../../domain/usage-log.entity';
import { UsageLogId } from '../../domain/id.vo';
import { UsageLogOutcomeValue } from '../../domain/outcome.vo';
import { UsageLogProjectId } from '../../domain/project-id.vo';
import { PrismaUsageLogMapper } from './prisma-usage-log.mapper';

@Injectable()
export class PrismaUsageLogRepository implements UsageLogRepositoryPort {
    constructor(private readonly prisma: PrismaService) { }

    async create(usageLog: UsageLog): Promise<void> {
        try {
            await this.prisma.usageLog.create({
                data: PrismaUsageLogMapper.toCreateInput(usageLog),
            });
        } catch (error) {
            if (this.isForeignKeyConstraintError(error)) {
                throw new UsageLogReferenceNotFoundError();
            }

            throw error;
        }
    }

    async findByIdAndProjectId(
        usageLogId: UsageLogId,
        projectId: UsageLogProjectId,
    ): Promise<UsageLog | null> {
        const record = await this.prisma.usageLog.findFirst({
            where: {
                id: usageLogId.toString(),
                projectId: projectId.toString(),
            },
        });

        return record ? PrismaUsageLogMapper.toDomain(record) : null;
    }

    async findByProjectId(
        projectId: UsageLogProjectId,
        filters: UsageLogFilters,
        pagination: PreparedCursorPagination<UsageLogCursorPayload>,
    ): Promise<UsageLog[]> {
        const records = await this.prisma.usageLog.findMany({
            where: this.buildWhere(projectId, filters),
            orderBy: [
                {
                    createdAt: 'desc',
                },
                {
                    id: 'desc',
                },
            ],
            take: pagination.dbArgs.take,
            skip: pagination.dbArgs.skip,
            ...(pagination.dbArgs.cursor
                ? {
                    cursor: {
                        createdAt_id: {
                            createdAt: new Date(pagination.dbArgs.cursor.createdAt),
                            id: pagination.dbArgs.cursor.id,
                        },
                    },
                }
                : {}),
        });

        return records.map(PrismaUsageLogMapper.toDomain);
    }

    private buildWhere(
        projectId: UsageLogProjectId,
        filters: UsageLogFilters,
    ): Prisma.UsageLogWhereInput {
        return {
            projectId: projectId.toString(),

            ...(filters.apiKeyId
                ? {
                    apiKeyId: filters.apiKeyId.toString(),
                }
                : {}),

            ...(filters.endpointId
                ? {
                    endpointId: filters.endpointId.toString(),
                }
                : {}),

            ...(filters.outcome
                ? {
                    outcome: this.toPrismaOutcome(
                        filters.outcome.toString(),
                    ),
                }
                : {}),

            ...(filters.from || filters.to
                ? {
                    createdAt: {
                        ...(filters.from
                            ? {
                                gte: filters.from,
                            }
                            : {}),
                        ...(filters.to
                            ? {
                                lte: filters.to,
                            }
                            : {}),
                    },
                }
                : {}),
        };
    }

    private toPrismaOutcome(
        outcome: UsageLogOutcomeValue,
    ): PrismaUsageLogOutcome {
        switch (outcome) {
            case UsageLogOutcomeValue.SUCCESS:
                return PrismaUsageLogOutcome.SUCCESS;
            case UsageLogOutcomeValue.API_KEY_MISSING:
                return PrismaUsageLogOutcome.API_KEY_MISSING;
            case UsageLogOutcomeValue.API_KEY_INVALID:
                return PrismaUsageLogOutcome.API_KEY_INVALID;
            case UsageLogOutcomeValue.API_KEY_REVOKED:
                return PrismaUsageLogOutcome.API_KEY_REVOKED;
            case UsageLogOutcomeValue.ENDPOINT_NOT_FOUND:
                return PrismaUsageLogOutcome.ENDPOINT_NOT_FOUND;
            case UsageLogOutcomeValue.ENDPOINT_DISABLED:
                return PrismaUsageLogOutcome.ENDPOINT_DISABLED;
            case UsageLogOutcomeValue.PERMISSION_DENIED:
                return PrismaUsageLogOutcome.PERMISSION_DENIED;
            case UsageLogOutcomeValue.UPSTREAM_ERROR:
                return PrismaUsageLogOutcome.UPSTREAM_ERROR;
            case UsageLogOutcomeValue.GATEWAY_VALIDATION_ERROR:
                return PrismaUsageLogOutcome.GATEWAY_VALIDATION_ERROR;
            case UsageLogOutcomeValue.UNKNOWN_ERROR:
                return PrismaUsageLogOutcome.UNKNOWN_ERROR;
        }
    }

    private isForeignKeyConstraintError(error: unknown): boolean {
        return (
            error instanceof Prisma.PrismaClientKnownRequestError &&
            error.code === 'P2003'
        );
    }
}