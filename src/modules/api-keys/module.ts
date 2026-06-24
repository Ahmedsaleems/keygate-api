import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/lib/database/module';
import { ApiKeyService as ApiKeyCredentialService } from '../../lib/api-keys/service';
import { ApiKeySecurityModule } from '../../lib/api-keys/module';
import {
  API_KEY_ENDPOINT_PERMISSION_REPOSITORY_PORT,
  ApiKeyEndpointPermissionRepositoryPort,
} from './application/endpoint-permission-repository.port';
import {
  API_KEY_PROJECT_ACCESS_PORT,
  ApiKeyProjectAccessPort,
} from './application/project-access.port';
import {
  API_KEY_REPOSITORY_PORT,
  ApiKeyRepositoryPort,
} from './application/api-key-repository.port';
import { ApiKeysService } from './application/api-key.service';
import { PrismaApiKeyEndpointPermissionRepository } from './infrastructure/persistence/prisma-endpoint-permission.repository';
import { PrismaApiKeyRepository } from './infrastructure/persistence/prisma-api-key.repository';
import { ApiKeysController } from './presentation/http/api-keys.controller';
import { ApiKeyEndpointPermissionsController } from './presentation/http/endpoint-permissions.controller';
import { JwtAuthModule } from 'src/lib/auth/auth.module';
import { ProjectsPublicModule } from '../projects/public/projects-public.module';
import { ProjectAccessAdapter } from './infrastructure/adapter/project-access.adapter';



@Module({
  imports: [DatabaseModule, ApiKeySecurityModule, JwtAuthModule, ProjectsPublicModule],
  controllers: [ApiKeysController, ApiKeyEndpointPermissionsController],
  providers: [
    {
      provide: API_KEY_REPOSITORY_PORT,
      useClass: PrismaApiKeyRepository,
    },
    {
      provide: API_KEY_ENDPOINT_PERMISSION_REPOSITORY_PORT,
      useClass: PrismaApiKeyEndpointPermissionRepository,
    },
    {
      provide: API_KEY_PROJECT_ACCESS_PORT,
      useClass: ProjectAccessAdapter,
    },
    {
      provide: ApiKeysService,
      useFactory: (
        apiKeyRepository: ApiKeyRepositoryPort,
        permissionRepository: ApiKeyEndpointPermissionRepositoryPort,
        projectAccess: ApiKeyProjectAccessPort,
        apiKeyCredentialService: ApiKeyCredentialService,
      ) =>
        new ApiKeysService(
          apiKeyRepository,
          permissionRepository,
          projectAccess,
          apiKeyCredentialService,
        ),
      inject: [
        API_KEY_REPOSITORY_PORT,
        API_KEY_ENDPOINT_PERMISSION_REPOSITORY_PORT,
        API_KEY_PROJECT_ACCESS_PORT,
        ApiKeyCredentialService,
      ],
    },
  ],
  exports: [
    API_KEY_REPOSITORY_PORT,
    API_KEY_ENDPOINT_PERMISSION_REPOSITORY_PORT,
    API_KEY_PROJECT_ACCESS_PORT,
    ApiKeysService,
  ],
})
export class ApiKeysModule {}