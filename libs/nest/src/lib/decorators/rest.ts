import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { names, pluralize } from '@robert-brightline/names';
import { resourceName } from '@robert-brightline/nest-common';
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
  return (target) => {
    const prototype = target.prototype;

    const _resourceName = resourceName(target.name);
    const { kebab } = names(_resourceName);

    const singularResourcePath = kebab;
    const pluralResourcePath = pluralize(kebab);

    const propertyNames = Object.getOwnPropertyNames(prototype).filter(
      (e) => e != 'constructor',
    );

    Controller()(target);

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
        switch (propertyKey) {
          case 'find': {
            SwaggerManyQuery()(...args);
            Get(pluralResourcePath)(...args);
            break;
          }
          case 'findById': {
            SwaggerProjectQuery()(...args);
            Get(`${singularResourcePath}/:id`)(...args);
            break;
          }
          case 'create': {
            SwaggerBody()(...args);
            SwaggerProjectQuery()(...args);
            Post(singularResourcePath)(...args);
            break;
          }
          case 'update': {
            SwaggerBody()(...args);
            SwaggerProjectQuery()(...args);
            Put(`${singularResourcePath}/:id`)(...args);
            break;
          }
          case 'delete': {
            SwaggerProjectQuery()(...args);
            Delete(`${singularResourcePath}/:id`)(...args);
            break;
          }
        }
      }
    }
  };
}
