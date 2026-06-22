import { Module } from '@nestjs/common';
import { ApiKeyService } from './service';
import { Config } from './config';

@Module({
  providers: [Config, ApiKeyService],
  exports: [ApiKeyService],
})
export class ApiKeySecurityModule {}