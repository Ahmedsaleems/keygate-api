import { CONFIG_FILE_PATH } from './constants';
import { RawConfig } from './loader';
import { ConfigKeyNotFoundError, ConfigSectionNotFoundError } from './error';

export class Config {
  constructor(private readonly config: RawConfig) {}

  getSection(section: string): Record<string, unknown> {
    if (!(section in this.config)) {
      throw new ConfigSectionNotFoundError(section, CONFIG_FILE_PATH);
    }

    const value = this.config[section];

    if (!this.isObject(value)) {
      throw new ConfigSectionNotFoundError(section, CONFIG_FILE_PATH);
    }

    return value;
  }

  get<TValue = unknown>(path: string): TValue {
    const parts = path.split('.').filter(Boolean);

    if (parts.length === 0) {
      throw new ConfigKeyNotFoundError(path, CONFIG_FILE_PATH);
    }

    let current: unknown = this.config;

    for (const part of parts) {
      if (!this.isObject(current) || !(part in current)) {
        throw new ConfigKeyNotFoundError(path, CONFIG_FILE_PATH);
      }

      current = current[part];
    }

    return current as TValue;
  }

  getAll(): RawConfig {
    return this.config;
  }

  private isObject(value: unknown): value is Record<string, unknown> {
    return value !== null && typeof value === 'object' && !Array.isArray(value);
  }
}