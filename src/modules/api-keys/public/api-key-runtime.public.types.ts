export type RuntimeAuthenticatedApiKey = {
  apiKeyId: string;
  projectId: string;
  prefix: string;
};

export type RuntimeApiKeyAuthenticationResult =
  | {
      status: 'AUTHENTICATED';
      apiKey: RuntimeAuthenticatedApiKey;
    }
  | {
      status: 'INVALID';
    }
  | {
      status: 'REVOKED';
      apiKey: RuntimeAuthenticatedApiKey;
    };

export type RuntimeApiKeyEndpointAccessCheckParams = {
  apiKeyId: string;
  endpointId: string;
};