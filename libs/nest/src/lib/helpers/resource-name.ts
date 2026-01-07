import { ResouceNameSuffixExp } from './resource-name-exp.js';

export function resourceName(className: string) {
  return className.replace(ResouceNameSuffixExp, '');
}
