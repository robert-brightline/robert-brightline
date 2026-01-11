import { Controller, Delete, Get, Logger, Post, Put } from '@nestjs/common';
import { InvalidNameError } from '@robert-brightline/errors';
import { names, pluralize } from '@robert-brightline/names';
import {
  getDescriptor,
  getMethodNames,
  isFunction,
  isThen,
} from '@robert-brightline/utils';
import { resourceName } from '../helpers/resource-name.js';
import type { CrudOperationName } from '../interfaces/crud-controller.js';
import {
  SwaggerBody,
  SwaggerManyQuery,
  SwaggerProjectQuery,
} from './swagger-decorators.js';

/**
 * Nestjs smart controller decorator
 *
 * @returns
 */
export function Rest(): ClassDecorator {
  const logger = new Logger('Rest');
  return (target) => {
    const className = target.name;
    const _resourceName = resourceName(className);
    const { kebab } = names(_resourceName);

    const singularPath = kebab;
    const idPath = `${kebab}/:id`;
    const pluralPath = pluralize(kebab);

    const methods = getMethodNames(target);

    if (!className.endsWith('Controller')) {
      throw new InvalidNameError(
        `Nestjs controller must end with "Controller" suffix`,
      );
    }

    Controller()(target);

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
          })
          .is(['read'], () => {
            SwaggerManyQuery()(...args);
            Get(pluralPath)(...args);
          })
          .is(['readOneById'], () => {
            SwaggerProjectQuery()(...args);
            Get(idPath)(...args);
          })
          .is(['update'], () => {
            SwaggerBody()(...args);
            SwaggerProjectQuery()(...args);
            Put(idPath)(...args);
          })
          .is(['delete'], () => {
            SwaggerProjectQuery()(...args);
            Delete(idPath)(...args);
          });
      }
    }
  };
}
