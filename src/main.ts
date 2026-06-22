import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppConfig } from './app.config';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const Config = app.get(AppConfig);

  app.setGlobalPrefix(Config.globalPrefix);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );


  await app.listen(Config.port);

  console.log(`Service ${Config.name} is running in ${Config.environment} mode on port ${Config.port}`);
}

void bootstrap();