import { Injectable } from '@nestjs/common';
import { z } from 'zod';
import { ConfigValidationError } from './lib/config/error';
import { Config } from './lib/config/config';

const appConfigSchema = z.object({
  name: z.string().min(1),
  port: z.number().int().positive(),
  globalPrefix: z.string().min(1),
  environment: z.enum(['development', 'test', 'production']),
});

type AppConfigValues = z.infer<typeof appConfigSchema>;

@Injectable()
export class AppConfig {
  private readonly values: AppConfigValues;

  constructor(private readonly genericConfig: Config) {
    const rawConfig = this.genericConfig.getSection('app');
    const result = appConfigSchema.safeParse(rawConfig);

    if (!result.success) {
      const issues = result.error.issues.map((issue) => {
        const path = issue.path.join('.') || '<root>';
        return `${path}: ${issue.message}`;
      });

      throw new ConfigValidationError('app', issues);
    }

    this.values = result.data;
  }

  get name(): string {
    return this.values.name;
  }

  get port(): number {
    return this.values.port;
  }

  get globalPrefix(): string {
    return this.values.globalPrefix;
  }

  get environment(): 'development' | 'test' | 'production' {
    return this.values.environment;
  }

  get isDevelopment(): boolean {
    return this.values.environment === 'development';
  }

  get isProduction(): boolean {
    return this.values.environment === 'production';
  }

  get isTest(): boolean {
    return this.values.environment === 'test';
  }
}