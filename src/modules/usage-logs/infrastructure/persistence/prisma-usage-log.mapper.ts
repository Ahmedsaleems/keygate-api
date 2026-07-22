import {
    EndpointMethod as PrismaEndpointMethod,
    Prisma,
    UsageLog as PrismaUsageLogRecord,
    UsageLogOutcome as PrismaUsageLogOutcome,
} from '../../../../lib/prisma/generated';
import { UsageLog } from '../../domain/usage-log.entity';
import { UsageLogApiKeyId } from '../../domain/api-key-id.vo';
import { UsageLogClientIp } from '../../domain/client-ip.vo';
import { UsageLogDurationMs } from '../../domain/duration.vo';
import { UsageLogEndpointId } from '../../domain/endpoint-id.vo';
import { UsageLogErrorCode } from '../../domain/error-code.vo';
import { UsageLogId } from '../../domain/id.vo';
import {
    UsageLogOutcome,
    UsageLogOutcomeValue,
} from '../../domain/outcome.vo';
import { UsageLogProjectId } from '../../domain/project-id.vo';
import { UsageLogQueryString } from '../../domain/query-string.vo';
import {
    UsageLogRequestMethod,
    UsageLogRequestMethodValue,
} from '../../domain/request-method.vo';
import { UsageLogRequestPath } from '../../domain/request-path.vo';
import { UsageLogStatusCode } from '../../domain/status-code.vo';
import { UsageLogUserAgent } from '../../domain/user-agent.vo';

export class PrismaUsageLogMapper {
    static toDomain(record: PrismaUsageLogRecord): UsageLog {
        return UsageLog.rehydrate({
            id: UsageLogId.fromString(record.id),
            projectId: record.projectId
                ? UsageLogProjectId.fromString(record.projectId)
                : null,
            apiKeyId: record.apiKeyId
                ? UsageLogApiKeyId.fromString(record.apiKeyId)
                : null,
            endpointId: record.endpointId
                ? UsageLogEndpointId.fromString(record.endpointId)
                : null,
            requestMethod: UsageLogRequestMethod.create(record.requestMethod),
            requestPath: UsageLogRequestPath.create(record.requestPath),
            queryString: UsageLogQueryString.create(record.queryString),
            outcome: UsageLogOutcome.create(record.outcome),
            gatewayStatusCode: UsageLogStatusCode.create(
                record.gatewayStatusCode,
            ),
            upstreamStatusCode:
                record.upstreamStatusCode === null
                    ? null
                    : UsageLogStatusCode.create(record.upstreamStatusCode),
            errorCode: UsageLogErrorCode.create(record.errorCode),
            durationMs: UsageLogDurationMs.create(record.durationMs),
            clientIp: UsageLogClientIp.create(record.clientIp),
            userAgent: UsageLogUserAgent.create(record.userAgent),
            createdAt: record.createdAt,
        });
    }

    static toCreateInput(
        usageLog: UsageLog,
    ): Prisma.UsageLogUncheckedCreateInput {
        return {
            id: usageLog.getId().toString(),
            projectId: usageLog.getProjectId()?.toString() ?? null,
            apiKeyId: usageLog.getApiKeyId()?.toString() ?? null,
            endpointId: usageLog.getEndpointId()?.toString() ?? null,
            requestMethod: this.toPrismaRequestMethod(
                usageLog.getRequestMethod().toString(),
            ),
            requestPath: usageLog.getRequestPath().toString(),
            queryString: usageLog.getQueryString().toNullableString(),
            outcome: this.toPrismaOutcome(usageLog.getOutcome().toString()),
            gatewayStatusCode: usageLog.getGatewayStatusCode().toNumber(),
            upstreamStatusCode:
                usageLog.getUpstreamStatusCode()?.toNumber() ?? null,
            errorCode: usageLog.getErrorCode().toNullableString(),
            durationMs: usageLog.getDurationMs().toNumber(),
            clientIp: usageLog.getClientIp().toNullableString(),
            userAgent: usageLog.getUserAgent().toNullableString(),
            createdAt: usageLog.getCreatedAt(),
        };
    }

    private static toPrismaRequestMethod(
        method: UsageLogRequestMethodValue,
    ): PrismaEndpointMethod {
        switch (method) {
            case UsageLogRequestMethodValue.GET:
                return PrismaEndpointMethod.GET;
            case UsageLogRequestMethodValue.POST:
                return PrismaEndpointMethod.POST;
            case UsageLogRequestMethodValue.PUT:
                return PrismaEndpointMethod.PUT;
            case UsageLogRequestMethodValue.PATCH:
                return PrismaEndpointMethod.PATCH;
            case UsageLogRequestMethodValue.DELETE:
                return PrismaEndpointMethod.DELETE;
        }
    }

    private static toPrismaOutcome(
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
}