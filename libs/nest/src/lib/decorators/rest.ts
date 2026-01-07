import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { names, pluralize } from '@robert-brightline/names';
import { resourceName } from '@robert-brightline/nest-common';
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
        switch (propertyKey) {
          case 'find': {
            Get(pluralResourcePath)(target, propertyKey, descriptor);
            break;
          }
          case 'findById': {
            Get(`${singularResourcePath}/:id`)(target, propertyKey, descriptor);
            break;
          }
          case 'create': {
            Post(singularResourcePath)(target, propertyKey, descriptor);
            break;
          }
          case 'update': {
            Put(`${singularResourcePath}/:id`)(target, propertyKey, descriptor);
            break;
          }
          case 'delete': {
            Delete(`${singularResourcePath}/:id`)(
              target,
              propertyKey,
              descriptor,
            );
            break;
          }
        }
      }
    }
  };
}
