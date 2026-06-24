export type RuntimeProjectEndpointStatus = 'ENABLED' | 'DISABLED';

export type RuntimeProjectEndpointResolveParams = {
  projectId: string;
  method: string;
  path: string;
};

export type RuntimeResolvedProjectEndpoint = {
  endpointId: string;
  projectId: string;
  method: string;
  registeredPath: string;
  requestPath: string;
  upstreamUrl: string;
  resolvedUpstreamUrl: string;
  status: RuntimeProjectEndpointStatus;
  pathParams: Record<string, string>;
};