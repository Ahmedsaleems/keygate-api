import { InvalidGatewayHttpMethodError } from './error';

export enum GatewayHttpMethodValue {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

export class GatewayHttpMethod {
  private constructor(private readonly value: GatewayHttpMethodValue) {}

  static create(value: string): GatewayHttpMethod {
    const normalized = value.trim().toUpperCase();

    if (!this.isAllowed(normalized)) {
      throw new InvalidGatewayHttpMethodError(value);
    }

    return new GatewayHttpMethod(normalized);
  }

  private static isAllowed(value: string): value is GatewayHttpMethodValue {
    return Object.values(GatewayHttpMethodValue).includes(
      value as GatewayHttpMethodValue,
    );
  }

  toString(): GatewayHttpMethodValue {
    return this.value;
  }

  equals(other: GatewayHttpMethod): boolean {
    return this.value === other.value;
  }
}