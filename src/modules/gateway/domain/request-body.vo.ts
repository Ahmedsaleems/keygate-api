export class GatewayRequestBody {
  private constructor(private readonly value: unknown) {}

  static empty(): GatewayRequestBody {
    return new GatewayRequestBody(undefined);
  }

  static create(value: unknown): GatewayRequestBody {
    return new GatewayRequestBody(value);
  }

  isEmpty(): boolean {
    return this.value === undefined || this.value === null;
  }

  getValue(): unknown {
    return this.value;
  }
}