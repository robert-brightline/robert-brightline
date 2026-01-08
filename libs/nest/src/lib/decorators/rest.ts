import { Controller, Delete, Get, Logger, Post, Put } from '@nestjs/common';
import { InvalidNameError } from '@robert-brightline/errors';
import { names, pluralize } from '@robert-brightline/names';
import { resourceName } from '@robert-brightline/nest-common';
import type { CrudController } from '../interfaces/crud-controller.js';
import {
  SwaggerBody,
  SwaggerManyQuery,
  SwaggerProjectQuery,
} from './swagger.js';

/**
 * Nestjs smart controller decorator
 * @returns
 */
export function Rest(): ClassDecorator {
  const logger = new Logger('Rest');
  return (target) => {
    const prototype = target.prototype;

    const className = target.name;
    const _resourceName = resourceName(className);
    const { kebab } = names(_resourceName);

    const singularResourcePath = kebab;
    const pluralResourcePath = pluralize(kebab);

    const propertyNames = Object.getOwnPropertyNames(prototype).filter(
      (e) => e != 'constructor',
    );

    if (!className.endsWith('Controller')) {
      throw new InvalidNameError(
        `Nestjs controller must ends with "Controller" suffix`,
      );
    }

    Controller()(target);

    logger.log(`Wiring ${className}`);

    for (const propertyKey of propertyNames) {
      const descriptor = Object.getOwnPropertyDescriptor(
        prototype,
        propertyKey,
      );

      if (typeof descriptor?.value === 'function') {
        const args: [typeof target, typeof propertyKey, typeof descriptor] = [
          target,
          propertyKey,
          descriptor,
        ];
        switch (propertyKey as keyof CrudController) {
          case 'read': {
            SwaggerManyQuery()(...args);
            Get(pluralResourcePath)(...args);
            logger.log(`Wiring ${propertyKey} method to ${className}`);
            break;
          }
          case 'readOneById': {
            SwaggerProjectQuery()(...args);
            Get(`${singularResourcePath}/:id`)(...args);
            logger.log(`Wiring ${propertyKey} method to ${className}`);
            break;
          }
          case 'create': {
            SwaggerBody()(...args);
            SwaggerProjectQuery()(...args);
            Post(singularResourcePath)(...args);
            logger.log(`Wiring ${propertyKey} method to ${className}`);
            break;
          }
          case 'update': {
            SwaggerBody()(...args);
            SwaggerProjectQuery()(...args);
            Put(`${singularResourcePath}/:id`)(...args);
            logger.log(`Wiring ${propertyKey} method to ${className}`);
            break;
          }
          case 'delete': {
            SwaggerProjectQuery()(...args);
            Delete(`${singularResourcePath}/:id`)(...args);
            logger.log(`Wiring ${propertyKey} method to ${className}`);
            break;
          }
        }
      }
    }
  };
}
