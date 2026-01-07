import { join } from 'path';
import { libs } from './projects';
import { libsdir } from './workspaces';

export function getlibroot(shortName: string) {
  return join(libsdir(), shortName);
}

export async function libroots() {
  return (await libs()).map((e) => getlibroot(e));
}
