/* eslint-disable @typescript-eslint/no-unsafe-function-type */
import type { Any, Class } from '@robert-brightline/types';

export function getDescriptor<T>(
  target: Class<T> | Function,
  methodName: keyof T,
) {
  return Object.getOwnPropertyDescriptor((target as Any).prototype, methodName);
}
