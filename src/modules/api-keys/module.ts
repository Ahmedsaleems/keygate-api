import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/lib/database/module';
import {
  API_KEY_ENDPOINT_PERMISSION_REPOSITORY_PORT,
} from './application/endpoint-permission-repository.port';
import {
  API_KEY_REPOSITORY_PORT,
} from './application/api-key-repository.port';
import { PrismaApiKeyEndpointPermissionRepository } from './infrastructure/persistence/prisma-endpoint-permission.repository';
import { PrismaApiKeyRepository } from './infrastructure/persistence/prisma-api-key.repository';

@Module({
  imports: [DatabaseModule],
  providers: [
    {
      provide: API_KEY_REPOSITORY_PORT,
      useClass: PrismaApiKeyRepository,
    },
    {
      provide: API_KEY_ENDPOINT_PERMISSION_REPOSITORY_PORT,
      useClass: PrismaApiKeyEndpointPermissionRepository,
    },
  ],
  exports: [
    API_KEY_REPOSITORY_PORT,
    API_KEY_ENDPOINT_PERMISSION_REPOSITORY_PORT,
  ],
})
export class ApiKeysModule {}