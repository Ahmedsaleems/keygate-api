import { All, Controller, Req, Res } from '@nestjs/common';
import type { Request, Response } from 'express';
import { GatewayApiKeyMissingError } from '../../application/error';
import { GatewayService } from '../../application/service';
import { GatewayRequest } from '../../domain/request.entity';
import { GatewayHttpMethod } from '../../domain/http-method.vo';
import { GatewayQueryString } from '../../domain/query-string.vo';
import { GatewayRawApiKey } from '../../domain/raw-api-key.vo';
import { GatewayRequestBody } from '../../domain/request-body.vo';
import { GatewayRequestHeaders } from '../../domain/request-headers.vo';
import { GatewayRequestPath } from '../../domain/request-path.vo';

@Controller('gateway')
export class GatewayController {
  constructor(private readonly gatewayService: GatewayService) {}

  @All(['', '/*gatewayPath'])
  async handleGatewayRequest(
    @Req() request: Request,
    @Res() response: Response,
  ): Promise<void> {
    const gatewayRequest = GatewayRequest.create({
      rawApiKey: this.extractApiKey(request),
      method: GatewayHttpMethod.create(request.method),
      path: GatewayRequestPath.create(this.extractGatewayPath(request)),
      queryString: GatewayQueryString.create(this.extractQueryString(request)),
      headers: GatewayRequestHeaders.create(request.headers),
      body: GatewayRequestBody.create(request.body),
    });

    const upstreamResponse =
      await this.gatewayService.executeRequest(gatewayRequest);

    response
      .status(upstreamResponse.getStatusCode())
      .set(this.toSafeResponseHeaders(upstreamResponse.getHeaders()))
      .send(upstreamResponse.getBody());
  }

  private extractApiKey(request: Request): GatewayRawApiKey {
    const rawApiKey = request.headers['x-api-key'];

    if (!rawApiKey || Array.isArray(rawApiKey)) {
      throw new GatewayApiKeyMissingError();
    }

    return GatewayRawApiKey.create(rawApiKey);
  }

  private extractGatewayPath(request: Request): string {
    const originalUrl = request.originalUrl || request.url;
    const pathWithoutQuery = originalUrl.split('?')[0] ?? '';
    const gatewayMarker = '/gateway';
    const markerIndex = pathWithoutQuery.indexOf(gatewayMarker);

    if (markerIndex === -1) {
      return '/';
    }

    const gatewayPath = pathWithoutQuery.slice(
      markerIndex + gatewayMarker.length,
    );

    return gatewayPath || '/';
  }

  private extractQueryString(request: Request): string {
    const originalUrl = request.originalUrl || request.url;
    const queryStartIndex = originalUrl.indexOf('?');

    if (queryStartIndex === -1) {
      return '';
    }

    return originalUrl.slice(queryStartIndex + 1);
  }

  private toSafeResponseHeaders(
    headers: Record<string, string | string[] | undefined>,
  ): Record<string, string> {
    const blockedHeaders = new Set([
      'connection',
      'content-length',
      'transfer-encoding',
    ]);

    const safeHeaders: Record<string, string> = {};

    for (const [key, value] of Object.entries(headers)) {
      const normalizedKey = key.toLowerCase();

      if (blockedHeaders.has(normalizedKey)) {
        continue;
      }

      if (value === undefined) {
        continue;
      }

      safeHeaders[key] = Array.isArray(value) ? value.join(',') : value;
    }

    return safeHeaders;
  }
}
