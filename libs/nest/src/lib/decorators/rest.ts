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
 * @returns
 */
export function Rest(): ClassDecorator {
  const logger = new Logger('Rest');
  return (target) => {
    const className = target.name;
    const _resourceName = resourceName(className);
    const { kebab } = names(_resourceName);

    const singularResourcePath = kebab;
    const pluralResourcePath = pluralize(kebab);

    const methods = getMethodNames(target);

    if (!className.endsWith('Controller')) {
      throw new InvalidNameError(
        `Nestjs controller must ends with "Controller" suffix`,
      );
    }

    Controller()(target);

    logger.log(`Wiring ${className}`);

    for (const m of methods) {
      const descriptor = getDescriptor(target, m);

      if (isFunction(descriptor?.value)) {
        const args = [target, m, descriptor] as Parameters<MethodDecorator>;

        isThen<CrudOperationName>('create')
          .is(['create'], () => {
            SwaggerBody()(...args);
            SwaggerProjectQuery()(...args);
            Post(singularResourcePath)(...args);
            logger.log(`Wiring ${m} method to ${className}`);
          })
          .is(['read'], () => {
            SwaggerManyQuery()(...args);
            Get(pluralResourcePath)(...args);
            logger.log(`Wiring ${m} method to ${className}`);
          })
          .is(['readOneById'], () => {
            SwaggerProjectQuery()(...args);
            Get(`${singularResourcePath}/:id`)(...args);
            logger.log(`Wiring ${m} method to ${className}`);
          })
          .is(['update'], () => {
            SwaggerBody()(...args);
            SwaggerProjectQuery()(...args);
            Put(`${singularResourcePath}/:id`)(...args);
            logger.log(`Wiring ${m} method to ${className}`);
          })
          .is(['delete'], () => {
            SwaggerProjectQuery()(...args);
            Delete(`${singularResourcePath}/:id`)(...args);
            logger.log(`Wiring ${m} method to ${className}`);
          });
      }
    }
  };
}
