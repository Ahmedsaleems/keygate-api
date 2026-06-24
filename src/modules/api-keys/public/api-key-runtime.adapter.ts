import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../lib/database/prisma.service';
import { ApiKeyService } from '../../../lib/api-keys/service';
import { ApiKeyRuntimePublicPort } from './api-key-runtime.public.port';
import {
  RuntimeApiKeyAuthenticationResult,
  RuntimeApiKeyEndpointAccessCheckParams,
} from './api-key-runtime.public.types';

@Injectable()
export class ApiKeyRuntimePublicService implements ApiKeyRuntimePublicPort {
  constructor(
    private readonly prisma: PrismaService,
    private readonly apiKeyCredentialService: ApiKeyService,
  ) {}

  async authenticateRawKey(
    rawApiKey: string,
  ): Promise<RuntimeApiKeyAuthenticationResult> {
    const normalizedRawKey = rawApiKey.trim();

    if (!normalizedRawKey) {
      return {
        status: 'INVALID',
      };
    }

    const keyHash = this.apiKeyCredentialService.hash(normalizedRawKey);

    const apiKey = await this.prisma.apiKey.findUnique({
      where: {
        keyHash,
      },
      select: {
        id: true,
        projectId: true,
        prefix: true,
        status: true,
      },
    });

    if (!apiKey) {
      return {
        status: 'INVALID',
      };
    }

    const runtimeApiKey = {
      apiKeyId: apiKey.id,
      projectId: apiKey.projectId,
      prefix: apiKey.prefix,
    };

    if (apiKey.status === 'REVOKED') {
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
    const count = await this.prisma.apiKeyEndpointPermission.count({
      where: {
        apiKeyId: params.apiKeyId,
        endpointId: params.endpointId,
        apiKey: {
          status: 'ACTIVE',
        },
      },
    });

    return count > 0;
  }
}