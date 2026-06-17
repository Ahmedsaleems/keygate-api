import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { parse } from 'yaml';
import { CONFIG_FILE_PATH } from './constants';
import { ConfigFileNotFoundError, ConfigParseError, ConfigRootInvalidError } from './error';


export type RawConfig = Record<string, unknown>;

export class ConfigLoader {
  static load(): RawConfig {
    const absolutePath = join(process.cwd(), CONFIG_FILE_PATH);

    let rawFile: string;

    try {
      rawFile = readFileSync(absolutePath, 'utf8');
    } catch {
      throw new ConfigFileNotFoundError(CONFIG_FILE_PATH);
    }

    let parsedYaml: unknown;

    try {
      parsedYaml = parse(rawFile);
    } catch {
      throw new ConfigParseError(CONFIG_FILE_PATH);
    }

    if (!this.isRootObject(parsedYaml)) {
      throw new ConfigRootInvalidError(CONFIG_FILE_PATH);
    }

    return parsedYaml;
  }

  private static isRootObject(value: unknown): value is RawConfig {
    return value !== null && typeof value === 'object' && !Array.isArray(value);
  }
}