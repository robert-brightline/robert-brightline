import { InvalidNameError } from '@robert-brightline/errors';
import { ResouceNameExp } from './resource-name-exp.js';

export function validateResouceName(className: string) {
  if (ResouceNameExp.test(className)) {
    return true;
  }
  throw new InvalidNameError(
    `Resouce name must match the expression ${ResouceNameExp.source} but found ${className}`,
  );
}
