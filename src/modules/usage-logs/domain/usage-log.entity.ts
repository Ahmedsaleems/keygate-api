import { randomUUID } from 'crypto';
import { UsageLogApiKeyId } from './api-key-id.vo';
import { UsageLogClientIp } from './client-ip.vo';
import { UsageLogDurationMs } from './duration.vo';
import { UsageLogEndpointId } from './endpoint-id.vo';
import { UsageLogErrorCode } from './error-code.vo';
import { UsageLogId } from './id.vo';
import { UsageLogOutcome } from './outcome.vo';
import { UsageLogProjectId } from './project-id.vo';
import { UsageLogQueryString } from './query-string.vo';
import { UsageLogRequestMethod } from './request-method.vo';
import { UsageLogRequestPath } from './request-path.vo';
import { UsageLogStatusCode } from './status-code.vo';
import { UsageLogUserAgent } from './user-agent.vo';

type CreateUsageLogProps = {
  projectId?: UsageLogProjectId | null;
  apiKeyId?: UsageLogApiKeyId | null;
  endpointId?: UsageLogEndpointId | null;
  requestMethod: UsageLogRequestMethod;
  requestPath: UsageLogRequestPath;
  queryString: UsageLogQueryString;
  outcome: UsageLogOutcome;
  gatewayStatusCode: UsageLogStatusCode;
  upstreamStatusCode?: UsageLogStatusCode | null;
  errorCode: UsageLogErrorCode;
  durationMs: UsageLogDurationMs;
  clientIp: UsageLogClientIp;
  userAgent: UsageLogUserAgent;
};

type RehydrateUsageLogProps = CreateUsageLogProps & {
  id: UsageLogId;
  createdAt: Date;
};

export class UsageLog {
  private constructor(
    private readonly id: UsageLogId,
    private readonly projectId: UsageLogProjectId | null,
    private readonly apiKeyId: UsageLogApiKeyId | null,
    private readonly endpointId: UsageLogEndpointId | null,
    private readonly requestMethod: UsageLogRequestMethod,
    private readonly requestPath: UsageLogRequestPath,
    private readonly queryString: UsageLogQueryString,
    private readonly outcome: UsageLogOutcome,
    private readonly gatewayStatusCode: UsageLogStatusCode,
    private readonly upstreamStatusCode: UsageLogStatusCode | null,
    private readonly errorCode: UsageLogErrorCode,
    private readonly durationMs: UsageLogDurationMs,
    private readonly clientIp: UsageLogClientIp,
    private readonly userAgent: UsageLogUserAgent,
    private readonly createdAt: Date,
  ) {}

  static create(props: CreateUsageLogProps): UsageLog {
    return new UsageLog(
      UsageLogId.fromString(randomUUID()),
      props.projectId ?? null,
      props.apiKeyId ?? null,
      props.endpointId ?? null,
      props.requestMethod,
      props.requestPath,
      props.queryString,
      props.outcome,
      props.gatewayStatusCode,
      props.upstreamStatusCode ?? null,
      props.errorCode,
      props.durationMs,
      props.clientIp,
      props.userAgent,
      new Date(),
    );
  }

  static rehydrate(props: RehydrateUsageLogProps): UsageLog {
    return new UsageLog(
      props.id,
      props.projectId ?? null,
      props.apiKeyId ?? null,
      props.endpointId ?? null,
      props.requestMethod,
      props.requestPath,
      props.queryString,
      props.outcome,
      props.gatewayStatusCode,
      props.upstreamStatusCode ?? null,
      props.errorCode,
      props.durationMs,
      props.clientIp,
      props.userAgent,
      props.createdAt,
    );
  }

  getId(): UsageLogId {
    return this.id;
  }

  getProjectId(): UsageLogProjectId | null {
    return this.projectId;
  }

  getApiKeyId(): UsageLogApiKeyId | null {
    return this.apiKeyId;
  }

  getEndpointId(): UsageLogEndpointId | null {
    return this.endpointId;
  }

  getRequestMethod(): UsageLogRequestMethod {
    return this.requestMethod;
  }

  getRequestPath(): UsageLogRequestPath {
    return this.requestPath;
  }

  getQueryString(): UsageLogQueryString {
    return this.queryString;
  }

  getOutcome(): UsageLogOutcome {
    return this.outcome;
  }

  getGatewayStatusCode(): UsageLogStatusCode {
    return this.gatewayStatusCode;
  }

  getUpstreamStatusCode(): UsageLogStatusCode | null {
    return this.upstreamStatusCode;
  }

  getErrorCode(): UsageLogErrorCode {
    return this.errorCode;
  }

  getDurationMs(): UsageLogDurationMs {
    return this.durationMs;
  }

  getClientIp(): UsageLogClientIp {
    return this.clientIp;
  }

  getUserAgent(): UsageLogUserAgent {
    return this.userAgent;
  }

  getCreatedAt(): Date {
    return this.createdAt;
  }
}