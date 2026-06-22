import { InvalidEndpointStatusError } from './error';

export enum EndpointStatusValue {
  ENABLED = 'ENABLED',
  DISABLED = 'DISABLED',
}

export class EndpointStatus {
  private constructor(private readonly value: EndpointStatusValue) {}

  static enabled(): EndpointStatus {
    return new EndpointStatus(EndpointStatusValue.ENABLED);
  }

  static disabled(): EndpointStatus {
    return new EndpointStatus(EndpointStatusValue.DISABLED);
  }

  static create(value: string): EndpointStatus {
    const normalized = value.trim().toUpperCase();

    if (!this.isAllowed(normalized)) {
      throw new InvalidEndpointStatusError(value);
    }

    return new EndpointStatus(normalized);
  }

  private static isAllowed(value: string): value is EndpointStatusValue {
    return Object.values(EndpointStatusValue).includes(
      value as EndpointStatusValue,
    );
  }

  isEnabled(): boolean {
    return this.value === EndpointStatusValue.ENABLED;
  }

  isDisabled(): boolean {
    return this.value === EndpointStatusValue.DISABLED;
  }

  toString(): EndpointStatusValue {
    return this.value;
  }

  equals(other: EndpointStatus): boolean {
    return this.value === other.value;
  }
}