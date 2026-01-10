import type { Any } from '@robert-brightline/types';

export function params<
  T extends MethodDecorator | ParameterDecorator | ClassDecorator,
>(...args: Any[]) {
  return [...args] as unknown as Parameters<T>;
}
