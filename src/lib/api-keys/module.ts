import { Module } from '@nestjs/common';
import { API_KEY_CREDENTIAL_PUBLIC_PORT } from './api-key-credential.public.port';
import { ApiKeyService } from './service';
import { Config } from './config';

@Module({
  providers: [
    Config,
    {
      provide: API_KEY_CREDENTIAL_PUBLIC_PORT,
      useClass: ApiKeyService,
    },
  ],
  exports: [API_KEY_CREDENTIAL_PUBLIC_PORT],
})
export class ApiKeySecurityModule {}
