export const Internal = 'Internal';
export const External = 'External';
export const Enums = 'Enums';

export function importInternal(schemaText: string, importPathPrefix = '../') {
  if (schemaText.includes(Internal + '.')) {
    return `import * as ${Internal} from '${importPathPrefix}internals.js';`;
  }
  return '';
}

export function importExternal(schemaText: string) {
  if (schemaText.includes(External + '.')) {
    return `import * as ${External} from '@robert-brightline/zod';`;
  }
  return '';
}

export function importEnums(schemaText: string, importPathPrefix = './') {
  if (schemaText.includes(Enums + '.')) {
    return `import * as ${Enums} from '${importPathPrefix}enums.js';`;
  }
  return '';
}

export function importZod(schemaText: string) {
  if (schemaText.includes('z.')) {
    return `import { z } from 'zod';`;
  }
  return '';
}
