import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../../lib/database/module';
import { ApiKeySecurityModule } from '../../../lib/api-keys/module';
import { API_KEY_RUNTIME_PUBLIC_PORT } from './api-key-runtime.public.port';
import { ApiKeyRuntimePublicService } from './api-key-runtime.adapter';

@Module({
  imports: [DatabaseModule, ApiKeySecurityModule],
  providers: [
    {
      provide: API_KEY_RUNTIME_PUBLIC_PORT,
      useClass: ApiKeyRuntimePublicService,
    },
  ],
  exports: [API_KEY_RUNTIME_PUBLIC_PORT],
})
export class ApiKeysPublicModule {}