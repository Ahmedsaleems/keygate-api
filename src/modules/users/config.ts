import { Injectable } from '@nestjs/common';
import { z } from 'zod';
import { ConfigValidationError } from 'src/common/infrastructure/config/error';
import { Config } from 'src/common/infrastructure/config/config';

const usersConfigSchema = z.object({
  jwtSecret: z.string().min(32),
  jwtExpiresIn: z.string().min(1),

  passwordHash: z.object({
    memoryCost: z.number().int().positive(),
    timeCost: z.number().int().positive(),
    parallelism: z.number().int().positive(),
  }),
});

type UsersConfigValues = z.infer<typeof usersConfigSchema>;

@Injectable()
export class UsersConfig {
  private readonly values: UsersConfigValues;

  constructor(private readonly config: Config) {
    const rawConfig = this.config.getSection('auth');
    const result = usersConfigSchema.safeParse(rawConfig);

    if (!result.success) {
      const issues = result.error.issues.map((issue) => {
        const path = issue.path.join('.') || '<root>';
        return `${path}: ${issue.message}`;
      });

      throw new ConfigValidationError('auth', issues);
    }

    this.values = result.data;
  }

  get jwtSecret(): string {
    return this.values.jwtSecret;
  }

  get jwtExpiresIn(): string {
    return this.values.jwtExpiresIn;
  }

  get passwordHashMemoryCost(): number {
    return this.values.passwordHash.memoryCost;
  }

  get passwordHashTimeCost(): number {
    return this.values.passwordHash.timeCost;
  }

  get passwordHashParallelism(): number {
    return this.values.passwordHash.parallelism;
  }
}