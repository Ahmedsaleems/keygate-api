import { InvalidGatewayRawApiKeyError } from './error';

export class GatewayRawApiKey {
  private constructor(private readonly value: string) {}

  static create(value: string): GatewayRawApiKey {
    const normalized = value.trim();

    if (!normalized) {
      throw new InvalidGatewayRawApiKeyError();
    }

    return new GatewayRawApiKey(normalized);
  }

  toString(): string {
    return this.value;
  }
}