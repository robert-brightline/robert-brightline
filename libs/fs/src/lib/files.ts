import { joinMap } from '@robert-brightline/utils';
import { dirs } from './dirs.js';
import { isFile } from './is-file.js';

export async function files(rootpath: string) {
  const __dirs = await dirs(rootpath);
  return __dirs.map(joinMap(rootpath)).filter(isFile);
}
