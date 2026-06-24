import { Injectable } from '@nestjs/common';
import { GatewayUpstreamRequest } from '../../domain/upstream-request.entity';
import { GatewayUpstreamResponse } from '../../domain/upstream-response.entity';
import { GatewayHttpForwarderPort } from '../../application/http-forwarder.port';
import { GatewayUpstreamRequestFailedError } from '../../application/error';

@Injectable()
export class GatewayHttpForwarderAdapter
  implements GatewayHttpForwarderPort
{
  async forward(
    request: GatewayUpstreamRequest,
  ): Promise<GatewayUpstreamResponse> {
    try {
      const response = await fetch(request.getUpstreamUrl().toString(), {
        method: request.getMethod().toString(),
        headers: request.getHeaders().toForwardableHeaders(),
        body: this.buildBody(request),
      });

      const responseHeaders = this.extractHeaders(response.headers);
      const responseBody = await this.extractBody(response);

      return GatewayUpstreamResponse.create({
        statusCode: response.status,
        headers: responseHeaders,
        body: responseBody,
      });
    } catch (error) {
      if (error instanceof Error) {
        throw new GatewayUpstreamRequestFailedError(error.message);
      }

      throw new GatewayUpstreamRequestFailedError();
    }
  }

  private buildBody(request: GatewayUpstreamRequest): BodyInit | undefined {
    const method = request.getMethod().toString();

    if (method === 'GET') {
      return undefined;
    }

    const body = request.getBody().getValue();

    if (body === undefined || body === null) {
      return undefined;
    }

    if (typeof body === 'string') {
      return body;
    }

    if (body instanceof Buffer) {
      return body;
    }

    return JSON.stringify(body);
  }

  private extractHeaders(headers: Headers): Record<string, string> {
    const result: Record<string, string> = {};

    headers.forEach((value, key) => {
      result[key] = value;
    });

    return result;
  }

  private async extractBody(response: Response): Promise<unknown> {
    const contentType = response.headers.get('content-type') ?? '';

    if (contentType.includes('application/json')) {
      try {
        return await response.json();
      } catch {
        return null;
      }
    }

    return response.text();
  }
}