import { GatewayHeadersRecord } from './request-headers.vo';

type CreateGatewayUpstreamResponseProps = {
  statusCode: number;
  headers: GatewayHeadersRecord;
  body: unknown;
};

export class GatewayUpstreamResponse {
  private constructor(
    private readonly statusCode: number,
    private readonly headers: GatewayHeadersRecord,
    private readonly body: unknown,
  ) {}

  static create(
    props: CreateGatewayUpstreamResponseProps,
  ): GatewayUpstreamResponse {
    return new GatewayUpstreamResponse(
      props.statusCode,
      props.headers,
      props.body,
    );
  }

  getStatusCode(): number {
    return this.statusCode;
  }

  getHeaders(): GatewayHeadersRecord {
    return { ...this.headers };
  }

  getBody(): unknown {
    return this.body;
  }
}