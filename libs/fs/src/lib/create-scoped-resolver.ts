import { AccessDeniedError } from '@robert-brightline/errors';
import { resolve } from 'path';

export type ScopedResolver = (...paths: string[]) => string;

/**
 * Create a file path resolver function that resovle or throw error if the resovled path is out of the defined {@link scopedPath}.
 *
 * @param scopedPath
 * @returns
 */
export function createScopedResolver(scopedPath: string) {
  scopedPath = resolve(scopedPath);
  const resolver = (...args: string[]) => {
    const resolvedPath = resolve(...args);
    if (resolvedPath.startsWith(scopedPath)) {
      return resolvedPath;
    }

    throw new AccessDeniedError(
      `The path, ${resolvedPath} is not under the defiend scope ${scopedPath}`,
    );
  };

  return resolver;
}
