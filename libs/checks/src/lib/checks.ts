import type { Any, Some } from '@robert-brightline/types';

export function isDefined<T>(value: Some<T>): value is T {
  return value !== undefined && value !== null;
}

export function isUndefined<T>(value: Some<T>): value is undefined | null {
  return value === undefined || value === null;
}

export function isEmptyString(value: Any): boolean {
  return value === '';
}

export function isNonEmptyString(value: Any): boolean {
  return typeof value === 'string' && value.length > 0;
}

export function isNonEmptyArray(value: Any): boolean {
  return Array.isArray(value) && value.length > 0;
}
export function isEmptyArray(value: Any): boolean {
  return Array.isArray(value) && value.length === 0;
}
export function isObject(value: Any): boolean {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}
export function isNonEmptyObject(value: Any): boolean {
  return isObject(value) && Object.keys(value).length > 0;
}
export function isEmptyObject(value: Any): boolean {
  return isObject(value) && Object.keys(value).length === 0;
}
export function isFunction(value: Any): boolean {
  return typeof value === 'function';
}
export function isNumber(value: Any): boolean {
  return typeof value === 'number' && !isNaN(value);
}
export function isBoolean(value: Any): boolean {
  return typeof value === 'boolean';
}

export function isString(value: Any): boolean {
  return typeof value === 'string';
}
export function isArray(value: Any): boolean {
  return Array.isArray(value);
}
export function isNull(value: Any): boolean {
  return value === null;
}
export function isNotNull(value: Any): boolean {
  return value !== null;
}
export function isDate(value: Any): boolean {
  return value instanceof Date && !isNaN(value.getTime());
}
export function isPromise(value: Any): boolean {
  return value instanceof Promise;
}
export function isSymbol(value: Any): boolean {
  return typeof value === 'symbol';
}
export function isBigInt(value: Any): boolean {
  return typeof value === 'bigint';
}
export function isIterable(value: Any): boolean {
  return value != null && typeof value[Symbol.iterator] === 'function';
}
export function isMap(value: Any): boolean {
  return value instanceof Map;
}
export function isSet(value: Any): boolean {
  return value instanceof Set;
}
export function isWeakMap(value: Any): boolean {
  return value instanceof WeakMap;
}
export function isWeakSet(value: Any): boolean {
  return value instanceof WeakSet;
}

export function isError(value: Any): boolean {
  return value instanceof Error;
}
export function isRegExp(value: Any): boolean {
  return value instanceof RegExp;
}
export function isTypedArray(value: Any): boolean {
  return ArrayBuffer.isView(value) && !(value instanceof DataView);
}
export function isArrayBuffer(value: Any): boolean {
  return value instanceof ArrayBuffer;
}
export function isDataView(value: Any): boolean {
  return value instanceof DataView;
}
export function isURL(value: Any): boolean {
  return value instanceof URL;
}
export function isUUID(value: Any): boolean {
  const uuidRegex =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  return isNonEmptyString(value) && uuidRegex.test(value);
}
export function isEmail(value: Any): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return isNonEmptyString(value) && emailRegex.test(value);
}
export function isPhoneNumber(value: Any): boolean {
  const phoneRegex = /^\+?[1-9]\d{1,14}$/;
  return isNonEmptyString(value) && phoneRegex.test(value);
}
export function isJSON(value: Any): boolean {
  if (!isNonEmptyString(value)) {
    return false;
  }
  try {
    JSON.parse(value);
    return true;
  } catch {
    return false;
  }
}

export function definedOrThrow<T>(
  value: Some<T>,
  errorMessage = 'Value is undefined or null',
): T {
  if (isUndefined(value)) {
    throw new Error(errorMessage);
  }
  return value;
}
export function nonEmptyStringOrThrow(
  value: Any,
  errorMessage = 'Value is not a non-empty string',
): string {
  if (!isNonEmptyString(value)) {
    throw new Error(errorMessage);
  }
  return value;
}
export function nonEmptyArrayOrThrow<T>(
  value: Any,
  errorMessage = 'Value is not a non-empty array',
): T[] {
  if (!isNonEmptyArray(value)) {
    throw new Error(errorMessage);
  }
  return value;
}
export function nonEmptyObjectOrThrow<T extends object>(
  value: Any,
  errorMessage = 'Value is not a non-empty object',
): T {
  if (!isNonEmptyObject(value)) {
    throw new Error(errorMessage);
  }
  return value;
}
