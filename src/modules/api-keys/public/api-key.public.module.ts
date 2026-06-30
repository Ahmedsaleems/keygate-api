import { Module } from '@nestjs/common';
import { ApiKeysModule } from '../module';
import { API_KEY_RUNTIME_PUBLIC_PORT } from './api-key-runtime.public.port';
import { ApiKeyRuntimePublicAdapter } from './api-key-runtime.adapter';

@Module({
  imports: [ApiKeysModule],
  providers: [
    {
      provide: API_KEY_RUNTIME_PUBLIC_PORT,
      useClass: ApiKeyRuntimePublicAdapter,
    },
  ],
  exports: [API_KEY_RUNTIME_PUBLIC_PORT],
})
export class ApiKeysPublicModule {}
