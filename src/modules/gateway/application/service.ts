import {
    type ApiKeyRuntimePublicPort,
    type RuntimeApiKeyAuthenticationResult,
} from '../../api-keys/public';
import {
    type ProjectEndpointRuntimePublicPort,
    type RuntimeResolvedProjectEndpoint,
} from '../../projects/public';
import { GatewayRequest } from '../domain/request.entity';
import { GatewayUpstreamRequest } from '../domain/upstream-request.entity';
import { GatewayUpstreamResponse } from '../domain/upstream-response.entity';
import { GatewayUpstreamUrl } from '../domain/upstream-url.vo';
import {
    GatewayApiKeyInvalidError,
    GatewayApiKeyRevokedError,
    GatewayEndpointAccessDeniedError,
    GatewayEndpointDisabledError,
    GatewayEndpointNotFoundError
} from './error';
import { GatewayHttpForwarderPort } from './http-forwarder.port';

export class GatewayService {
    constructor(
        private readonly apiKeyRuntime: ApiKeyRuntimePublicPort,
        private readonly projectEndpointRuntime: ProjectEndpointRuntimePublicPort,
        private readonly httpForwarder: GatewayHttpForwarderPort,
    ) { }

    async executeRequest(request: GatewayRequest): Promise<GatewayUpstreamResponse> {
        const authenticatedApiKey = await this.authenticateApiKey(request);

        const resolvedEndpoint = await this.resolveEndpoint(
            authenticatedApiKey.projectId,
            request,
        );

        this.ensureEndpointIsEnabled(resolvedEndpoint);

        await this.ensureApiKeyCanAccessEndpoint(
            authenticatedApiKey.apiKeyId,
            resolvedEndpoint.endpointId,
        );

        const upstreamRequest = this.buildUpstreamRequest(
            request,
            resolvedEndpoint,
        );

        return this.httpForwarder.forward(upstreamRequest);
    }

    private async authenticateApiKey(request: GatewayRequest): Promise<{
        apiKeyId: string;
        projectId: string;
    }> {
        const result = await this.apiKeyRuntime.authenticateRawKey(
            request.getRawApiKey().toString(),
        );

        return this.handleAuthenticationResult(result);
    }

    private handleAuthenticationResult(
        result: RuntimeApiKeyAuthenticationResult,
    ): {
        apiKeyId: string;
        projectId: string;
    } {
        if (result.status === 'INVALID') {
            throw new GatewayApiKeyInvalidError();
        }

        if (result.status === 'REVOKED') {
            throw new GatewayApiKeyRevokedError();
        }

        return {
            apiKeyId: result.apiKey.apiKeyId,
            projectId: result.apiKey.projectId,
        };
    }

    private async resolveEndpoint(
        projectId: string,
        request: GatewayRequest,
    ): Promise<RuntimeResolvedProjectEndpoint> {
        const resolvedEndpoint = await this.projectEndpointRuntime.resolveEndpoint({
            projectId,
            method: request.getMethod().toString(),
            path: request.getPath().toString(),
        });

        if (!resolvedEndpoint) {
            throw new GatewayEndpointNotFoundError();
        }

        return resolvedEndpoint;
    }

    private ensureEndpointIsEnabled(
        resolvedEndpoint: RuntimeResolvedProjectEndpoint,
    ): void {
        if (resolvedEndpoint.status !== 'ENABLED') {
            throw new GatewayEndpointDisabledError();
        }
    }

    private async ensureApiKeyCanAccessEndpoint(
        apiKeyId: string,
        endpointId: string,
    ): Promise<void> {
        const canAccess = await this.apiKeyRuntime.canAccessEndpoint({
            apiKeyId,
            endpointId,
        });

        if (!canAccess) {
            throw new GatewayEndpointAccessDeniedError();
        }
    }

    private buildUpstreamRequest(
        request: GatewayRequest,
        resolvedEndpoint: RuntimeResolvedProjectEndpoint,
    ): GatewayUpstreamRequest {
        const resolvedUpstreamUrl = GatewayUpstreamUrl.create(
            resolvedEndpoint.resolvedUpstreamUrl,
        );

        const upstreamUrlWithQueryString = GatewayUpstreamUrl.create(
            resolvedUpstreamUrl.withQueryString(request.getQueryString()),
        );

        return GatewayUpstreamRequest.create({
            method: request.getMethod(),
            upstreamUrl: upstreamUrlWithQueryString,
            headers: request.getHeaders(),
            body: request.getBody(),
        });
    }
}