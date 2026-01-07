import { join } from 'path';

export function joinMap(...args: string[]) {
  return (value: string) => join(...args, value);
}
