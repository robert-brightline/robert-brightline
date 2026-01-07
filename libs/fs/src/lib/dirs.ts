import { readdir, stat } from 'fs/promises';
import { join } from 'path';

export type Dir = {
  absolutePath: string;
  relativePath: string;
  isFile: boolean;
  isDir: boolean;
  children?: Dir[];
  visited?: boolean;
  readonly?: boolean;
  ignore?: boolean;
  content?: string;
};

export async function dirs(filepath: string): Promise<Dir[]> {
  const foundRootDirs = await readdir(filepath, { encoding: 'utf8' });

  return Promise.all(
    foundRootDirs.map(async (relativePath: string) => {
      const absolutePath = join(filepath, relativePath);
      const _stat = await stat(absolutePath);

      const children = _stat.isDirectory()
        ? await dirs(join(filepath, relativePath))
        : undefined;

      const fileStat = {
        absolutePath,
        relativePath,
        isFile: _stat.isFile(),
        isDir: _stat.isDirectory(),
        children,
      };

      return fileStat;
    }),
  );
}
