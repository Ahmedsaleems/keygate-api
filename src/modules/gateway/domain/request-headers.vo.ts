export type GatewayHeadersRecord = Record<string, string | string[] | undefined>;

export class GatewayRequestHeaders {
  private static readonly BLOCKED_HEADERS = new Set([
    'x-api-key',
    'host',
    'connection',
    'content-length',
  ]);

  private constructor(private readonly value: GatewayHeadersRecord) {}

  static create(headers: GatewayHeadersRecord): GatewayRequestHeaders {
    return new GatewayRequestHeaders({ ...headers });
  }

  toForwardableHeaders(): Record<string, string> {
    const forwardableHeaders: Record<string, string> = {};

    for (const [key, value] of Object.entries(this.value)) {
      const normalizedKey = key.toLowerCase();

      if (GatewayRequestHeaders.BLOCKED_HEADERS.has(normalizedKey)) {
        continue;
      }

      if (value === undefined) {
        continue;
      }

      forwardableHeaders[key] = Array.isArray(value) ? value.join(',') : value;
    }

    return forwardableHeaders;
  }

  toRecord(): GatewayHeadersRecord {
    return { ...this.value };
  }
}