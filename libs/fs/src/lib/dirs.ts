import { readdir } from 'fs/promises';



export async function dirs(rootpath: string) {
  return await readdir(rootpath, { recursive: true, encoding: 'utf8' });
}
