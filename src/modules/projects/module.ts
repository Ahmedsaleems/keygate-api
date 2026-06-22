import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../lib/database/module';
import {
  PROJECT_ENDPOINT_REPOSITORY_PORT,
} from './application/project-endpoint-repository.port';
import {
  PROJECT_REPOSITORY_PORT,
} from './application/project-repository.port';
import { PrismaProjectEndpointRepository } from './infrastructure/persistence/prisma-project-endpoint.repository';
import { PrismaProjectRepository } from './infrastructure/persistence/prisma-project.repository';

@Module({
  imports: [DatabaseModule],
  providers: [
    {
      provide: PROJECT_REPOSITORY_PORT,
      useClass: PrismaProjectRepository,
    },
    {
      provide: PROJECT_ENDPOINT_REPOSITORY_PORT,
      useClass: PrismaProjectEndpointRepository,
    },
  ],
  exports: [PROJECT_REPOSITORY_PORT, PROJECT_ENDPOINT_REPOSITORY_PORT],
})
export class ProjectsModule {}