import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/lib/database/module';
import { PROJECT_ACCESS_PUBLIC_PORT } from './project-access.port';
import { ProjectAccessPublicAdapter } from './project-access.adapter';

@Module({
  imports: [DatabaseModule],
  providers: [
    {
      provide: PROJECT_ACCESS_PUBLIC_PORT,
      useClass: ProjectAccessPublicAdapter,
    },
  ],
  exports: [PROJECT_ACCESS_PUBLIC_PORT],
})
export class ProjectsPublicModule {}