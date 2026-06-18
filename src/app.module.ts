import { Module } from '@nestjs/common';
import { AppConfig } from './app.config';
import { ConfigModule } from './common/infrastructure/config/module';
import { HealthModule } from './modules/health/module';
import { DatabaseModule } from './common/infrastructure/database/module';
import { UsersModule } from './modules/users/module';

@Module({
  imports: [
    ConfigModule,
    HealthModule,
    DatabaseModule,
    UsersModule
  ],
  providers: [AppConfig],
  exports: [AppConfig],
})
export class AppModule { }