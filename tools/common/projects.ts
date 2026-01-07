import { readdir } from 'fs/promises';
import { apisdir, dbsdir, libsdir, pluginsdir } from './workspaces';

/**
 * List all project names
 * @returns
 */
export async function apis() {
  return await readdir(apisdir());
}

/**
 * List all project names
 * @returns
 */
export async function libs() {
  return await readdir(libsdir());
}

/**
 * List all project names
 * @returns
 */
export async function plugins() {
  return await readdir(pluginsdir());
}

/**
 * List all project names
 * @returns
 */
export async function dbs() {
  return await readdir(dbsdir());
}
