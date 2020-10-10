// src/Library/Config.ts
import { readFile } from 'fs/promises';
import { load } from 'js-yaml';

interface Config {
  /**
   * Azure Enterprise Application Id
   */
  clientId: string;

  /**
   * Azure Application Client Secret
   */
  clientSecret: string;

  /**
   * Microsoft 365 Tenant
   */
  tenant: string;
}

/**
 * Ensure a object is an Config
 * @param config Config Object
 */
export function checkConfig(config: Config): config is Config {
  if (!config.clientId || !config.tenant || !config.clientSecret) {
    return false;
  }

  return true;
}

export async function loadConfig(): Promise<Config> {
  const configPath = process.env.CONFIG_PATH || 'config.yml';

  const configFile = await readFile(configPath);

  const yml = load(configFile.toString());

  if (checkConfig(yml)) {
    return yml;
  }

  throw new Error('Invalid Configuration file');
}
