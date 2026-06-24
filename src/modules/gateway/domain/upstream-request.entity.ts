import { GatewayHttpMethod } from './http-method.vo';
import { GatewayRequestBody } from './request-body.vo';
import { GatewayRequestHeaders } from './request-headers.vo';
import { GatewayUpstreamUrl } from './upstream-url.vo';

type CreateGatewayUpstreamRequestProps = {
  method: GatewayHttpMethod;
  upstreamUrl: GatewayUpstreamUrl;
  headers: GatewayRequestHeaders;
  body: GatewayRequestBody;
};

export class GatewayUpstreamRequest {
  private constructor(
    private readonly method: GatewayHttpMethod,
    private readonly upstreamUrl: GatewayUpstreamUrl,
    private readonly headers: GatewayRequestHeaders,
    private readonly body: GatewayRequestBody,
  ) {}

  static create(
    props: CreateGatewayUpstreamRequestProps,
  ): GatewayUpstreamRequest {
    return new GatewayUpstreamRequest(
      props.method,
      props.upstreamUrl,
      props.headers,
      props.body,
    );
  }

  getMethod(): GatewayHttpMethod {
    return this.method;
  }

  getUpstreamUrl(): GatewayUpstreamUrl {
    return this.upstreamUrl;
  }

  getHeaders(): GatewayRequestHeaders {
    return this.headers;
  }

  getBody(): GatewayRequestBody {
    return this.body;
  }
}