import { Injectable } from '@nestjs/common';
import { ApiKeysService } from '../application/api-key.service';
import {
  InvalidApiKeyIdError,
  InvalidApiKeyProjectEndpointIdError,
  InvalidRawApiKeyError,
} from '../domain/error';
import { ApiKeyId } from '../domain/api-key-id.vo';
import { ApiKeyProjectEndpointId } from '../domain/project-endpoint-id.vo';
import { RawApiKey } from '../domain/raw-api-key.vo';
import { ApiKeyRuntimePublicPort } from './api-key-runtime.public.port';
import {
  RuntimeApiKeyAuthenticationResult,
  RuntimeApiKeyEndpointAccessCheckParams,
} from './api-key-runtime.public.types';

@Injectable()
export class ApiKeyRuntimePublicAdapter implements ApiKeyRuntimePublicPort {
  constructor(private readonly apiKeysService: ApiKeysService) {}

  async authenticateRawKey(
    rawApiKey: string,
  ): Promise<RuntimeApiKeyAuthenticationResult> {
    let credential: RawApiKey;

    try {
      credential = RawApiKey.create(rawApiKey);
    } catch (error: unknown) {
      if (error instanceof InvalidRawApiKeyError) {
        return { status: 'INVALID' };
      }

      throw error;
    }

    const apiKey = await this.apiKeysService.authenticateRawKey(credential);

    if (!apiKey) {
      return { status: 'INVALID' };
    }

    const runtimeApiKey = {
      apiKeyId: apiKey.getId().toString(),
      projectId: apiKey.getProjectId().toString(),
      prefix: apiKey.getPrefix().toString(),
    };

    if (apiKey.isRevoked()) {
      return {
        status: 'REVOKED',
        apiKey: runtimeApiKey,
      };
    }

    return {
      status: 'AUTHENTICATED',
      apiKey: runtimeApiKey,
    };
  }

  async canAccessEndpoint(
    params: RuntimeApiKeyEndpointAccessCheckParams,
  ): Promise<boolean> {
    let apiKeyId: ApiKeyId;
    let endpointId: ApiKeyProjectEndpointId;

    try {
      apiKeyId = ApiKeyId.fromString(params.apiKeyId);
      endpointId = ApiKeyProjectEndpointId.fromString(params.endpointId);
    } catch (error: unknown) {
      if (
        error instanceof InvalidApiKeyIdError ||
        error instanceof InvalidApiKeyProjectEndpointIdError
      ) {
        return false;
      }

      throw error;
    }

    return this.apiKeysService.canAccessEndpoint(apiKeyId, endpointId);
  }
}
