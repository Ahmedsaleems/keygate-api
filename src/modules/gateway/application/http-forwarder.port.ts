import { GatewayUpstreamRequest } from '../domain/upstream-request.entity';
import { GatewayUpstreamResponse } from '../domain/upstream-response.entity';

export const GATEWAY_HTTP_FORWARDER_PORT = Symbol(
  'GATEWAY_HTTP_FORWARDER_PORT',
);

export interface GatewayHttpForwarderPort {
  forward(request: GatewayUpstreamRequest): Promise<GatewayUpstreamResponse>;
}