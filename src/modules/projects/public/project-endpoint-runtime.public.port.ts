import {
  RuntimeProjectEndpointResolveParams,
  RuntimeResolvedProjectEndpoint,
} from './project-endpoint-runtime.public.types';

export const PROJECT_ENDPOINT_RUNTIME_PUBLIC_PORT = Symbol(
  'PROJECT_ENDPOINT_RUNTIME_PUBLIC_PORT',
);

export interface ProjectEndpointRuntimePublicPort {
  resolveEndpoint(
    params: RuntimeProjectEndpointResolveParams,
  ): Promise<RuntimeResolvedProjectEndpoint | null>;
}