import { ResouceNameSuffixExp } from './resource-name-exp.js';

export function extractResourceName(className: string) {
  return className.replace(ResouceNameSuffixExp, '');
}
