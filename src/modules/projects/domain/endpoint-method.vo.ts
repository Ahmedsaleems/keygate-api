import { InvalidEndpointMethodError } from './error';

export enum EndpointMethodValue {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

export class EndpointMethod {
  private constructor(private readonly value: EndpointMethodValue) {}

  static create(value: string): EndpointMethod {
    const normalized = value.trim().toUpperCase();

    if (!this.isAllowed(normalized)) {
      throw new InvalidEndpointMethodError(value);
    }

    return new EndpointMethod(normalized);
  }

  private static isAllowed(value: string): value is EndpointMethodValue {
    return Object.values(EndpointMethodValue).includes(
      value as EndpointMethodValue,
    );
  }

  toString(): EndpointMethodValue {
    return this.value;
  }

  equals(other: EndpointMethod): boolean {
    return this.value === other.value;
  }
}