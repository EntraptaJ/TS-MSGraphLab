// src/Utils/moduleFileFinder.ts
import { Dirent, readdirSync } from 'fs';
import { resolve } from 'path';
import { pathToFileURL } from 'url';
import { resolvePath } from './resolvePath';

type FileMatcher = RegExp;

const coreModulesDir = resolvePath('../Modules', import.meta.url);

const processDirectoryCache = new Map<string, Dirent[]>();

/**
 * Finds module files that match the fileMatcher
 * @param
 */
export async function findModuleFiles<T>(
  fileMatcher: FileMatcher,
  rootDir: string = coreModulesDir,
): Promise<T[]> {
  function processDirectory(directoryPath: string): Promise<T>[] {
    let directoryContents = processDirectoryCache.get(directoryPath);

    if (!directoryContents) {
      directoryContents = readdirSync(directoryPath, {
        encoding: 'utf-8',
        withFileTypes: true,
      });

      processDirectoryCache.set(directoryPath, directoryContents);
    }

    const directoryChildren = directoryContents.flatMap((directoryContent) => {
      const contentPath = resolve(directoryPath, directoryContent.name);

      if (directoryContent.isDirectory()) {
        return processDirectory(contentPath);
      }

      if (fileMatcher.test(directoryContent.name) === true) {
        return import(pathToFileURL(contentPath).href) as Promise<T>;
      }

      return [];
    });

    return directoryChildren;
  }

  const moduleFiles = await Promise.all(processDirectory(rootDir));

  return moduleFiles;
}
