import { Module } from '@nestjs/common';
import { AppConfig } from './app.config';
import { ConfigModule } from './common/infrastructure/config/module';
import { HealthModule } from './modules/health/module';

@Module({
  imports: [
    ConfigModule,
    HealthModule
  ],
  providers: [AppConfig],
  exports: [AppConfig],
})
export class AppModule { }