export const PASSWORD_HASHER_PORT = Symbol('PASSWORD_HASHER_PORT');

export interface PasswordHasherPort {
  hash(rawPassword: string): Promise<string>;

  verify(rawPassword: string, passwordHash: string): Promise<boolean>;
}