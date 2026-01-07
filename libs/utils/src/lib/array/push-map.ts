export function pushMap<T>(...args: T[]) {
  return (value: T[]) => value.push(...args);
}
