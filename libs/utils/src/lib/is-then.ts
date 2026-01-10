export class IsThen<T> {
  constructor(protected value: T) {}

  is<E extends T, R extends IsThen<Exclude<T, E>>>(
    expectedValues: E[],
    then?: (value: E) => void,
  ): R {
    if (expectedValues.some((e) => e === this.value)) {
      if (typeof then === 'function') {
        then?.(this.value as E);
      }
    }
    return this as unknown as R;
  }
}

export function isThen<T>(sourceValue: T) {
  return new IsThen<T>(sourceValue);
}
