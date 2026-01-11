import { Controller, Delete, Get, Logger, Post, Put } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { InvalidNameError } from '@robert-brightline/errors';
import { names, pluralize } from '@robert-brightline/names';
import {
  getDescriptor,
  getMethodNames,
  isFunction,
  isThen,
} from '@robert-brightline/utils';
import { extractResourceName } from '../helpers/resource-name.js';
import type { CrudOperationName } from '../interfaces/crud-controller.js';
import {
  DeleteOperation,
  ReadOperation,
  ResourceName,
  UpdateOperation,
  WriteOperation,
} from './metadata-decorators.js';
import {
  SwaggerBody,
  SwaggerManyQuery,
  SwaggerProjectQuery,
} from './swagger-decorators.js';

/**
 * Exended nestjs controller decorator
 *
 * @returns {@link ClassDecorator}
 */
export function Rest(): ClassDecorator {
  const logger = new Logger('Rest');
  return (target) => {
    const className = target.name;
    const _resourceName = extractResourceName(className);
    const { kebab, pascal } = names(_resourceName);

    const singularPath = kebab;
    const idPath = `${kebab}/:id`;
    const pluralPath = pluralize(kebab);

    const methods = getMethodNames(target);

    if (!className.endsWith('Controller')) {
      throw new InvalidNameError(
        `Nestjs controller must end with "Controller" suffix`,
      );
    }

    ResourceName(pascal)(target);
    Controller()(target);

    ApiBearerAuth()(target);

    logger.log(`Wiring ${className}`);

    for (const methodName of methods) {
      const descriptor = getDescriptor(target, methodName);

      if (isFunction(descriptor?.value)) {
        const args = [
          target,
          methodName,
          descriptor,
        ] as Parameters<MethodDecorator>;

        logger.log(`Wiring ${methodName} to ${className}`);

        isThen<CrudOperationName>('create')
          .is(['create'], () => {
            SwaggerBody()(...args);
            SwaggerProjectQuery()(...args);
            Post(singularPath)(...args);
            WriteOperation()(...args);
          })
          .is(['read'], () => {
            SwaggerManyQuery()(...args);
            Get(pluralPath)(...args);
            ReadOperation()(...args);
          })
          .is(['readOneById'], () => {
            SwaggerProjectQuery()(...args);
            Get(idPath)(...args);
            ReadOperation()(...args);
          })
          .is(['update'], () => {
            SwaggerBody()(...args);
            SwaggerProjectQuery()(...args);
            Put(idPath)(...args);
            UpdateOperation()(...args);
          })
          .is(['delete'], () => {
            SwaggerProjectQuery()(...args);
            Delete(idPath)(...args);
            DeleteOperation()(...args);
          });
      }
    }
  };
}
