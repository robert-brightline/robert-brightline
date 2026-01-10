/* eslint-disable @typescript-eslint/no-unsafe-function-type */
import type { Any, Class, Keys } from '@robert-brightline/types';

export function getMethodNames<T>(target: Class<T> | Function) {
  const instance = new (target as Any)();

  const prototype = Object.getPrototypeOf(instance);

  return Object.getOwnPropertyNames(prototype).filter(
    (prop) => prop != 'constructor' && typeof prototype[prop] === 'function',
  ) as unknown as Keys<T>;
}
