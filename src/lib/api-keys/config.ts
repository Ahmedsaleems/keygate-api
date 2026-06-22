import { Injectable } from '@nestjs/common';
import { z } from 'zod';
import { ConfigValidationError } from '../config/error';
import { Config as GenericConfig } from '../config/config';

const ConfigSchema = z.object({
  prefix: z.string().min(1).max(30),
  hmacSecret: z.string().min(32),
  randomBytesLength: z.number().int().positive().max(128),
});

type ConfigValues = z.infer<typeof ConfigSchema>;

@Injectable()
export class Config {
  private readonly values: ConfigValues;

  constructor(private readonly genericConfig: GenericConfig) {
    const rawConfig = this.genericConfig.getSection('apiKeys');
    const result = ConfigSchema.safeParse(rawConfig);

    if (!result.success) {
      const issues = result.error.issues.map((issue) => {
        const path = issue.path.join('.') || '<root>';
        return `${path}: ${issue.message}`;
      });

      throw new ConfigValidationError('apiKeys', issues);
    }

    this.values = result.data;
  }

  get prefix(): string {
    return this.values.prefix;
  }

  get hmacSecret(): string {
    return this.values.hmacSecret;
  }

  get randomBytesLength(): number {
    return this.values.randomBytesLength;
  }
}