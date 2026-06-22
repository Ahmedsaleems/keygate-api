import { Injectable } from '@nestjs/common';
import { z } from 'zod';
import { ConfigValidationError } from '../config/error';
import { Config } from '../config/config';

const databaseConfigSchema = z.object({
  url: z.string().min(1),
});

type DatabaseConfigValues = z.infer<typeof databaseConfigSchema>;

@Injectable()
export class DatabaseConfig {
  private readonly values: DatabaseConfigValues;

  constructor(private readonly config: Config) {
    const rawConfig = this.config.getSection('database');
    const result = databaseConfigSchema.safeParse(rawConfig);

    if (!result.success) {
      const issues = result.error.issues.map((issue) => {
        const path = issue.path.join('.') || '<root>';
        return `${path}: ${issue.message}`;
      });

      throw new ConfigValidationError('database', issues);
    }

    this.values = result.data;
  }

  get url(): string {
    return this.values.url;
  }
}