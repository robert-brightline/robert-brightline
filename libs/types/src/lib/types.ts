/* eslint-disable @typescript-eslint/no-unsafe-function-type */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Any = any;

export type Some<T> = T | null | undefined;
export type Keys<T> = (keyof T)[];
export type PartialRecord<K extends keyof Any, T> = {
  [P in K]?: T;
};
export type ReadonlyPartialRecord<K extends keyof Any, T> = {
  readonly [P in K]?: T;
};
export type WritablePartialRecord<K extends keyof Any, T> = {
  -readonly [P in K]?: T;
};
export type ValueOf<T> = T[keyof T];
export type Awaitable<T> = T | Promise<T>;
export type Constructor<T = Any> = new (...args: Any[]) => T;
export type AbstractConstructor<T = Any> = abstract new (...args: Any[]) => T;
export type Class<T = Any> = Constructor<T> | AbstractConstructor<T>;
export type MaybeArray<T> = T | T[];
export type Promisable<T> = T | Promise<T>;
export type Dict<T = Any> = Record<string, T>;
export type OmitIndexSignature<T> = {
  [K in keyof T as string extends K
    ? never
    : number extends K
      ? never
      : K]: T[K];
};
export type MergeInsertions<T> = {
  [K in keyof T]: T[K];
};
export type IfEquals<X, Y, A = X, B = never> =
  (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2 ? A : B;
export type Writable<T> = {
  -readonly [P in keyof T]: T[P];
};
export type DeepWritable<T> = T extends Function
  ? T
  : T extends Array<infer U>
    ? Array<DeepWritable<U>>
    : T extends object
      ? { -readonly [P in keyof T]: DeepWritable<T[P]> }
      : T;
export type DeepPartial<T> = T extends Function
  ? T
  : T extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T extends object
      ? { [P in keyof T]?: DeepPartial<T[P]> }
      : T;
export type DeepReadonly<T> = T extends Function
  ? T
  : T extends Array<infer U>
    ? ReadonlyArray<DeepReadonly<U>>
    : T extends object
      ? { readonly [P in keyof T]: DeepReadonly<T[P]> }
      : T;
export type Exact<A, B> = A extends B ? (B extends A ? A : never) : never;
export type UnionToIntersection<U> = (
  U extends Any ? (k: U) => void : never
) extends (k: infer I) => void
  ? I
  : never;
export type Overwrite<T, U> = Omit<T, keyof U> & U;
export type RequireAtLeastOne<T, Keys extends keyof T = keyof T> = Pick<
  T,
  Exclude<keyof T, Keys>
> &
  {
    [K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>>;
  }[Keys];
export type RequireOnlyOne<T, Keys extends keyof T = keyof T> = Pick<
  T,
  Exclude<keyof T, Keys>
> &
  {
    [K in Keys]-?: Required<Pick<T, K>> &
      Partial<Record<Exclude<Keys, K>, never>>;
  }[Keys];
export type SetOptional<T, K extends keyof T> = Omit<T, K> &
  Partial<Pick<T, K>>;
export type SetRequired<T, K extends keyof T> = Omit<T, K> &
  Required<Pick<T, K>>;
export type Brand<T, B> = T & { __brand: B };
export type Tuple<T, N extends number> = N extends N
  ? number extends N
    ? T[]
    : _TupleOf<T, N, []>
  : never;
type _TupleOf<T, N extends number, R extends unknown[]> = R['length'] extends N
  ? R
  : _TupleOf<T, N, [T, ...R]>;
export type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };
export type XOR<T, U> = (Without<T, U> & U) | (Without<U, T> & T);
export type DistributiveOmit<T, K extends keyof Any> = T extends Any
  ? Omit<T, K>
  : never;
export type DistributivePick<T, K extends keyof Any> = T extends Any
  ? Pick<T, K & keyof T>
  : never;
export type TupleToUnion<T extends Any[]> = T[number];

export type ObjectToUnion<T extends object> = T[keyof T];
export type UnionToTuple<T> =
  _UnionToTuple<T> extends infer R ? (R extends Any[] ? R : never) : never;
type _UnionToTuple<T, L = _LastInUnion<T>> = [T] extends [never]
  ? []
  : [..._UnionToTuple<Exclude<T, L>>, L];
type _LastInUnion<T> =
  UnionToIntersection<T extends Any ? () => T : never> extends () => infer R
    ? R
    : never;
export type IsUnion<T, B = T> = T extends Any
  ? [B] extends [T]
    ? false
    : true
  : never;
export type Primitive =
  | string
  | number
  | boolean
  | bigint
  | symbol
  | null
  | undefined;
export type Builtin =
  | Primitive
  | Function
  | Date
  | Error
  | RegExp
  | Generator
  | GeneratorFunction
  | Promise<Any>;
export type DeepMerge<F, S> = S extends Builtin
  ? S
  : F extends Builtin
    ? S
    : F & {
        [K in keyof S]: K extends keyof F ? DeepMerge<F[K], S[K]> : S[K];
      };
export type Merge<F, S> = Omit<F, keyof S> & S;
export type LiteralUnion<T extends U, U = string> = T | (U & {});
export type RecursivePartial<T> = {
  [P in keyof T]?: T[P] extends object ? RecursivePartial<T[P]> : T[P];
};
