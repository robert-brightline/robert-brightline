import { join } from 'path';

/**
 * Work space directory
 * @returns
 */
export function workspace() {
  return join(__dirname, '../..');
}
/**
 * Work space directory
 * @returns
 */
export function libsdir() {
  return join(workspace(), 'libs');
}

/**
 * Work space directory
 * @returns
 */
export function apisdir() {
  return join(workspace(), 'apis');
}

/**
 * Work space directory
 * @returns
 */
export function pluginsdir() {
  return join(workspace(), 'plugins');
}

/**
 * Work space directory
 * @returns
 */
export function dbsdir() {
  return join(workspace(), 'dbs');
}
