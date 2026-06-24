import { Module } from '@nestjs/common';
import { AppConfig } from './app.config';
import { ConfigModule } from './lib/config/module';
import { HealthModule } from './modules/health/module';
import { DatabaseModule } from './lib/database/module';
import { UsersModule } from './modules/users/module';
import { ProjectsModule } from './modules/projects/module';
import { ApiKeysModule } from './modules/api-keys/module';
import { GatewayModule } from './modules/gateway/module';

@Module({
  imports: [
    ConfigModule,
    HealthModule,
    DatabaseModule,
    UsersModule,
    ProjectsModule,
    ApiKeysModule,
    GatewayModule,
  ],
  providers: [AppConfig],
  exports: [AppConfig],
})
export class AppModule { }