import { Module } from '@nestjs/common';
import { ProjectsModule } from '../module';
import { PROJECT_ACCESS_PUBLIC_PORT } from './project-access.public.port';
import { ProjectAccessPublicAdapter } from './project-access.adapter';
import { PROJECT_ENDPOINT_RUNTIME_PUBLIC_PORT } from './project-endpoint-runtime.public.port';
import { ProjectEndpointRuntimePublicAdapter } from './project-endpoint-runtime.adapter';

@Module({
  imports: [ProjectsModule],
  providers: [
    {
      provide: PROJECT_ACCESS_PUBLIC_PORT,
      useClass: ProjectAccessPublicAdapter,
    },
    {
      provide: PROJECT_ENDPOINT_RUNTIME_PUBLIC_PORT,
      useClass: ProjectEndpointRuntimePublicAdapter,
    },
  ],
  exports: [PROJECT_ACCESS_PUBLIC_PORT, PROJECT_ENDPOINT_RUNTIME_PUBLIC_PORT],
})
export class ProjectsPublicModule {}
