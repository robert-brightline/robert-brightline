/* eslint-disable @typescript-eslint/no-unsafe-function-type */
import type { Any } from '@robert-brightline/types';

export function isFunction(
  value: Any,
): value is Function | { new (...args: Any[]): Any } {
  return typeof value === 'function';
}

export function isString(value: Any): value is string {
  return typeof value === 'string';
}
