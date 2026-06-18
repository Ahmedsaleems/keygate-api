import { Module } from '@nestjs/common';
import { PASSWORD_HASHER_PORT } from '../../application/security/password-hasher.port';
import { Argon2PasswordHasherService } from './argon2-password-hasher.service';
import { PasswordHashingConfig } from './password-hashing.config';

@Module({
  providers: [
    PasswordHashingConfig,
    {
      provide: PASSWORD_HASHER_PORT,
      useClass: Argon2PasswordHasherService,
    },
  ],
  exports: [PASSWORD_HASHER_PORT],
})
export class PasswordHashingModule {}