import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { parse } from 'yaml';
import { z } from 'zod';
import { defineConfig } from 'prisma/config';

const CONFIG_FILE_PATH = 'config/config.yaml';

const databaseConfigSchema = z.object({
  url: z.string().min(1),
});

function loadDatabaseUrl(): string {
  const absolutePath = join(process.cwd(), CONFIG_FILE_PATH);

  const rawFile = readFileSync(absolutePath, 'utf8');
  const parsedYaml = parse(rawFile) as unknown;

  const rootSchema = z.object({
    database: databaseConfigSchema,
  });

  const result = rootSchema.safeParse(parsedYaml);

  if (!result.success) {
    const issues = result.error.issues
      .map((issue) => {
        const path = issue.path.join('.') || '<root>';
        return `${path}: ${issue.message}`;
      })
      .join('\n');

    throw new Error(`Invalid Prisma database config:\n${issues}`);
  }

  return result.data.database.url;
}

process.env.DATABASE_URL = loadDatabaseUrl();

export default defineConfig({
  schema: './schema.prisma',

  migrations: {
    path: './migrations',
  },

});