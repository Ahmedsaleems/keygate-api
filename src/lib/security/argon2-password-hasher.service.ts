import { Injectable } from '@nestjs/common';
import * as argon2 from 'argon2';
import { PasswordHasherPort } from '../security/password-hasher.port';
import { PasswordHashingConfig } from './password-hashing.config';

@Injectable()
export class Argon2PasswordHasherService implements PasswordHasherPort {
  constructor(private readonly config: PasswordHashingConfig) {}

  async hash(rawPassword: string): Promise<string> {
    return argon2.hash(rawPassword, {
      type: argon2.argon2id,
      memoryCost: this.config.memoryCost,
      timeCost: this.config.timeCost,
      parallelism: this.config.parallelism,
    });
  }

  async verify(rawPassword: string, passwordHash: string): Promise<boolean> {
    return argon2.verify(passwordHash, rawPassword);
  }
}