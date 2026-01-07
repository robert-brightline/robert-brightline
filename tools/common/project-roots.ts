import { join } from 'path';
import { apis, dbs, libs, plugins } from './projects';
import { apisdir, dbsdir, libsdir, pluginsdir } from './workspaces';

export function libroot(lib: string) {
  return join(libsdir(), lib);
}

export function pluginroot(lib: string) {
  return join(pluginsdir(), lib);
}

export function apiroot(lib: string) {
  return join(apisdir(), lib);
}
export function dbroot(lib: string) {
  return join(dbsdir(), lib);
}

export async function libroots() {
  return (await libs()).map((e) => libroot(e));
}
export async function pluginroots() {
  return (await plugins()).map((e) => pluginroot(e));
}
export async function apiroots() {
  return (await apis()).map((e) => apiroot(e));
}
export async function dbroots() {
  return (await dbs()).map((e) => dbroot(e));
}

export async function projectroots() {
  return [
    await libroots(),
    await dbroots(),
    await pluginroots(),
    await apiroots(),
  ].flat();
}
