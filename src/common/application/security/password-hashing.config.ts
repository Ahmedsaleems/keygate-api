import { Injectable } from '@nestjs/common';
import { z } from 'zod';
import { ConfigValidationError } from 'src/common/infrastructure/config/error';
import { Config } from 'src/common/infrastructure/config/config';

const passwordHashingConfigSchema = z.object({
  passwordHash: z.object({
    memoryCost: z.number().int().positive(),
    timeCost: z.number().int().positive(),
    parallelism: z.number().int().positive(),
  }),
});

@Injectable()
export class PasswordHashingConfig {
  private readonly values: z.infer<typeof passwordHashingConfigSchema>;

  constructor(private readonly config: Config) {
    const rawConfig = this.config.getSection('auth');
    const result = passwordHashingConfigSchema.safeParse(rawConfig);

    if (!result.success) {
      const issues = result.error.issues.map((issue) => {
        const path = issue.path.join('.') || '<root>';
        return `${path}: ${issue.message}`;
      });

      throw new ConfigValidationError('auth.passwordHash', issues);
    }

    this.values = result.data;
  }

  get memoryCost(): number {
    return this.values.passwordHash.memoryCost;
  }

  get timeCost(): number {
    return this.values.passwordHash.timeCost;
  }

  get parallelism(): number {
    return this.values.passwordHash.parallelism;
  }
}