import { stat } from 'fs/promises';

export async function isFile(filepath: string) {
  const _stat = await stat(filepath);
  return _stat.isFile();
}
