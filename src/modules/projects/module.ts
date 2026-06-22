import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../lib/database/module';
import {
  PROJECT_ENDPOINT_REPOSITORY_PORT,
  ProjectEndpointRepositoryPort,
} from './application/project-endpoint-repository.port';
import {
  PROJECT_REPOSITORY_PORT,
  ProjectRepositoryPort,
} from './application/project-repository.port';
import { PrismaProjectEndpointRepository } from './infrastructure/persistence/prisma-project-endpoint.repository';
import { PrismaProjectRepository } from './infrastructure/persistence/prisma-project.repository';
import { ProjectsService } from './application/projects.service';
import { ProjectEndpointsController } from './presentation/http/project-endpoint.controller';
import { ProjectsController } from './presentation/http/project.controller';
import { JwtAuthModule } from 'src/lib/auth/auth.module';

@Module({
  imports: [DatabaseModule, JwtAuthModule],
  controllers: [ProjectsController, ProjectEndpointsController],
  providers: [
    {
      provide: PROJECT_REPOSITORY_PORT,
      useClass: PrismaProjectRepository,
    },
    {
      provide: PROJECT_ENDPOINT_REPOSITORY_PORT,
      useClass: PrismaProjectEndpointRepository,
    },
    {
      provide: ProjectsService,
      useFactory: (
        projectRepository: ProjectRepositoryPort,
        projectEndpointRepository: ProjectEndpointRepositoryPort,
      ) => new ProjectsService(projectRepository, projectEndpointRepository),
      inject: [PROJECT_REPOSITORY_PORT, PROJECT_ENDPOINT_REPOSITORY_PORT],
    },
  ],
  exports: [PROJECT_REPOSITORY_PORT, PROJECT_ENDPOINT_REPOSITORY_PORT, ProjectsService],
})
export class ProjectsModule {}