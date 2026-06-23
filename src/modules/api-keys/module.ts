import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/lib/database/module';
import { ApiKeySecurityModule } from '../../lib//api-keys/module';

import {
    API_KEY_ENDPOINT_PERMISSION_REPOSITORY_PORT,
    ApiKeyEndpointPermissionRepositoryPort,
} from './application/endpoint-permission-repository.port';
import {
    API_KEY_REPOSITORY_PORT,
    ApiKeyRepositoryPort,
} from './application/api-key-repository.port';
import { PrismaApiKeyEndpointPermissionRepository } from './infrastructure/persistence/prisma-endpoint-permission.repository';
import { PrismaApiKeyRepository } from './infrastructure/persistence/prisma-api-key.repository';
import { ApiKeyService as ApiKeyCredentialService } from '../../lib/api-keys/service';
import { ApiKeysService } from './application/api-key.service';



@Module({
    imports: [DatabaseModule, ApiKeySecurityModule],
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
            provide: ApiKeysService,
            useFactory: (
                apiKeyRepository: ApiKeyRepositoryPort,
                permissionRepository: ApiKeyEndpointPermissionRepositoryPort,
                apiKeyCredentialService: ApiKeyCredentialService,
            ) =>
                new ApiKeysService(
                    apiKeyRepository,
                    permissionRepository,
                    apiKeyCredentialService,
                ),
            inject: [
                API_KEY_REPOSITORY_PORT,
                API_KEY_ENDPOINT_PERMISSION_REPOSITORY_PORT,
                ApiKeyCredentialService,
            ],
        },
    ],
    exports: [
        API_KEY_REPOSITORY_PORT,
        API_KEY_ENDPOINT_PERMISSION_REPOSITORY_PORT,
    ],
})
export class ApiKeysModule { }