export abstract class ApplicationError extends Error {
  abstract readonly code: string;

  protected constructor(
    message: string,
    public readonly details?: Record<string, unknown>,
    options?: ErrorOptions,
  ) {
    super(message, options);
    this.name = this.constructor.name;
  }
}
