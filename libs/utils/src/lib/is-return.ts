import type { Some } from '@robert-brightline/types';

export class IsReturn<T, O, D extends O> {
  protected thenValue?: O;
  constructor(protected value: T) {}

  is<
    E extends T,
    A extends D,
    R extends IsReturn<Exclude<T, E>, O, Exclude<D, A>>,
  >(expectedValue: E, thenValue: A): R {
    if (this.value === expectedValue) {
      this.thenValue = thenValue;
    }

    return this as unknown as R;
  }

  getOrThrow(): O {
    if (this.thenValue != undefined) {
      return this.thenValue as O;
    }

    throw new Error('isReturn matcher is not completed!');
  }

  get(): Some<O> {
    return this.thenValue;
  }
}

export function isReturn<T, O, D extends O = O>(sourceValue: T) {
  return new IsReturn<T, O, D>(sourceValue);
}
