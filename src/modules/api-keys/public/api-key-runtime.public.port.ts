import {
  RuntimeApiKeyAuthenticationResult,
  RuntimeApiKeyEndpointAccessCheckParams,
} from './api-key-runtime.public.types';

export const API_KEY_RUNTIME_PUBLIC_PORT = Symbol(
  'API_KEY_RUNTIME_PUBLIC_PORT',
);

export interface ApiKeyRuntimePublicPort {
  authenticateRawKey(rawApiKey: string): Promise<RuntimeApiKeyAuthenticationResult>;

  canAccessEndpoint(
    params: RuntimeApiKeyEndpointAccessCheckParams,
  ): Promise<boolean>;
}