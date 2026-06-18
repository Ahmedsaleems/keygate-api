import { Module } from '@nestjs/common';
import { DatabaseConfig } from './config';
import { PrismaService } from './prisma.service';

@Module({
  providers: [DatabaseConfig, PrismaService],
  exports: [PrismaService],
})
export class DatabaseModule {}