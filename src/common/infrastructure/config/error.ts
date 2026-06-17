import { ApplicationError } from 'src/common/application/errors/application.error';

export abstract class ConfigError extends ApplicationError {}

export class ConfigFileNotFoundError extends ConfigError {
  readonly code = 'CONFIG_FILE_NOT_FOUND';

  constructor(configPath: string) {
    super(`Config file was not found at "${configPath}".`, {
      configPath,
      suggestion: 'Create config/config.yaml from config/config.example.yaml.',
    });
  }
}

export class ConfigParseError extends ConfigError {
  readonly code = 'CONFIG_PARSE_ERROR';

  constructor(configPath: string) {
    super(`Config file "${configPath}" contains invalid YAML syntax.`, {
      configPath,
    });
  }
}

export class ConfigRootInvalidError extends ConfigError {
  readonly code = 'CONFIG_ROOT_INVALID';

  constructor(configPath: string) {
    super(`Config file "${configPath}" must contain a YAML object at the root.`, {
      configPath,
    });
  }
}

export class ConfigSectionNotFoundError extends ConfigError {
  readonly code = 'CONFIG_SECTION_NOT_FOUND';

  constructor(section: string, configPath: string) {
    super(`Required config section "${section}" was not found in "${configPath}".`, {
      section,
      configPath,
    });
  }
}

export class ConfigKeyNotFoundError extends ConfigError {
  readonly code = 'CONFIG_KEY_NOT_FOUND';

  constructor(key: string, configPath: string) {
    super(`Required config key "${key}" was not found in "${configPath}".`, {
      key,
      configPath,
    });
  }
}

export class ConfigValidationError extends ConfigError {
  readonly code = 'CONFIG_VALIDATION_ERROR';

  constructor(section: string, issues: string[]) {
    super(`Config section "${section}" is invalid.`, {
      section,
      issues,
    });
  }
}