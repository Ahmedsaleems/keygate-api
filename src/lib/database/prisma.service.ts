import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../prisma/generated/client';
import { DatabaseConfig } from './config';
import { DatabaseConnectionError } from './error';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy {
  constructor(databaseConfig: DatabaseConfig) {
    const adapter = new PrismaPg({
      connectionString: databaseConfig.url,
    });

    super({
      adapter,
    });
  }

  async onModuleInit(): Promise<void> {
    try {
      await this.$connect();
      await this.$queryRaw`SELECT 1`;
    } catch (error: unknown) {
      throw new DatabaseConnectionError(this.extractDatabaseErrorReason(error));
    }
  }

  async onModuleDestroy(): Promise<void> {
    await this.$disconnect();
  }

  private extractDatabaseErrorReason(error: unknown): string {
    if (!this.isRecord(error)) {
      return 'Database client failed to connect.';
    }

    const meta = error.meta;

    if (this.isRecord(meta) && typeof meta.message === 'string') {
      return meta.message;
    }

    if (error instanceof Error) {
      return error.message;
    }

    return 'Database client failed to connect.';
  }

  private isRecord(value: unknown): value is Record<string, unknown> {
    return value !== null && typeof value === 'object' && !Array.isArray(value);
  }

}