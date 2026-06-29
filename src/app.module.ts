import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AppConfig } from './app.config';
import { ConfigModule } from './lib/config/module';
import { HealthModule } from './modules/health/module';
import { DatabaseModule } from './lib/database/module';
import { UsersModule } from './modules/users/module';
import { ProjectsModule } from './modules/projects/module';
import { ApiKeysModule } from './modules/api-keys/module';
import { GatewayModule } from './modules/gateway/module';
import { PrismaExceptionInterceptor } from './lib/database/prisma-exception.interceptor';

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
  providers: [
    AppConfig,
    {
      provide: APP_INTERCEPTOR,
      useClass: PrismaExceptionInterceptor,
    },
  ],
  exports: [AppConfig],
})
export class AppModule {}
