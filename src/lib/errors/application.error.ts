export abstract class ApplicationError extends Error {
  abstract readonly code: string;

  protected constructor(
    message: string,
    public readonly details?: Record<string, unknown>,
  ) {
    super(message);
    this.name = this.constructor.name;
  }
}