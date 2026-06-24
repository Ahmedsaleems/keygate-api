import { GatewayHttpMethod } from './http-method.vo';
import { GatewayQueryString } from './query-string.vo';
import { GatewayRawApiKey } from './raw-api-key.vo';
import { GatewayRequestBody } from './request-body.vo';
import { GatewayRequestHeaders } from './request-headers.vo';
import { GatewayRequestPath } from './request-path.vo';

type CreateGatewayRequestProps = {
  rawApiKey: GatewayRawApiKey;
  method: GatewayHttpMethod;
  path: GatewayRequestPath;
  queryString: GatewayQueryString;
  headers: GatewayRequestHeaders;
  body: GatewayRequestBody;
};

export class GatewayRequest {
  private constructor(
    private readonly rawApiKey: GatewayRawApiKey,
    private readonly method: GatewayHttpMethod,
    private readonly path: GatewayRequestPath,
    private readonly queryString: GatewayQueryString,
    private readonly headers: GatewayRequestHeaders,
    private readonly body: GatewayRequestBody,
  ) {}

  static create(props: CreateGatewayRequestProps): GatewayRequest {
    return new GatewayRequest(
      props.rawApiKey,
      props.method,
      props.path,
      props.queryString,
      props.headers,
      props.body,
    );
  }

  getRawApiKey(): GatewayRawApiKey {
    return this.rawApiKey;
  }

  getMethod(): GatewayHttpMethod {
    return this.method;
  }

  getPath(): GatewayRequestPath {
    return this.path;
  }

  getQueryString(): GatewayQueryString {
    return this.queryString;
  }

  getHeaders(): GatewayRequestHeaders {
    return this.headers;
  }

  getBody(): GatewayRequestBody {
    return this.body;
  }
}