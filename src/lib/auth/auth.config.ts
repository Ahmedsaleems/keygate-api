import { Injectable } from '@nestjs/common';
import { z } from 'zod';
import { ConfigValidationError } from 'src/lib/config/error';
import { Config } from 'src/lib/config/config';

const AuthConfigSchema = z.object({
  jwtSecret: z.string().min(32),
  jwtExpiresIn: z.string().min(1),
});

@Injectable()
export class AuthConfig {
  private readonly values: z.infer<typeof AuthConfigSchema>;

  constructor(private readonly config: Config) {
    const rawConfig = this.config.getSection('auth');
    const result = AuthConfigSchema.safeParse(rawConfig);

    if (!result.success) {
      const issues = result.error.issues.map((issue) => {
        const path = issue.path.join('.') || '<root>';
        return `${path}: ${issue.message}`;
      });

      throw new ConfigValidationError('auth.jwt', issues);
    }

    this.values = result.data;
  }

  get secret(): string {
    return this.values.jwtSecret;
  }

  get expiresIn(): string {
    return this.values.jwtExpiresIn;
  }
}