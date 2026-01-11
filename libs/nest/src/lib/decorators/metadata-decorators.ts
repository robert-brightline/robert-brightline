import { createMetadata } from '../helpers/create-metadata.js';
import type { CrudOperation } from '../interfaces/crud-operation.js';

export const {
  getMetadata: isPublicRessource,
  setMethodMetadata: PublicOperation,
  setClassMetadata: PublicResource,
} = createMetadata<never>('PUBLIC');

export const { getMetadata: getResourceName, setClassMetadata: ResourceName } =
  createMetadata<string>('RESOURCE_NAME');

export const {
  getMetadata: getOperationName,
  setMethodMetadata: OperationName,
} = createMetadata<CrudOperation>('OPERATION_NAME');

export function WriteOperation(): MethodDecorator {
  return function (...args) {
    OperationName('WRITE')(...args);
  };
}
export function ReadOperation(): MethodDecorator {
  return function (...args) {
    OperationName('READ')(...args);
  };
}
export function UpdateOperation(): MethodDecorator {
  return function (...args) {
    OperationName('UPDATE')(...args);
  };
}
export function DeleteOperation(): MethodDecorator {
  return function (...args) {
    OperationName('DELETE')(...args);
  };
}
export function ManageOperation(): MethodDecorator {
  return function (...args) {
    OperationName('MANAGE')(...args);
  };
}
