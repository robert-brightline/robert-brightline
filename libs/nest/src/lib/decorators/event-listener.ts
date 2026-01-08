import { Injectable, Logger } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { names } from '@robert-brightline/names';
import { crudEventNames, resourceName } from '@robert-brightline/nest-common';
import type { CrudListener } from '../interfaces/crud-listener.js';

export function EventListener(): ClassDecorator {
  const logger = new Logger('EventListener');
  return (target) => {
    Injectable()(target);

    const prototype = target.prototype;

    const _resourceName = resourceName(target.name);
    const { kebab } = names(_resourceName);

    const propertyNames = Object.getOwnPropertyNames(prototype).filter(
      (e) => e != 'constructor',
    );

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

        const eventNames = crudEventNames(kebab);

        switch (propertyKey as keyof CrudListener) {
          case 'onRead': {
            OnEvent(eventNames.read)(...args);
            logger.log(`Wiring "${eventNames.read} event to onRead method"`);
            break;
          }
          case 'onCreate': {
            OnEvent(eventNames.create)(...args);
            logger.log(
              `Wiring "${eventNames.create} event to onCreate method"`,
            );
            break;
          }
          case 'onUpdate': {
            OnEvent(eventNames.update)(...args);
            logger.log(
              `Wiring "${eventNames.update} event to onUpdate method"`,
            );
            break;
          }
          case 'onDelete': {
            OnEvent(eventNames.delete)(...args);
            logger.log(
              `Wiring "${eventNames.delete} event to onDelete method"`,
            );
            break;
          }

          case 'beforeRead': {
            OnEvent(eventNames.beforeRead)(...args);
            logger.log(`Wiring ${eventNames.beforeRead} to beforeRead method`);
            break;
          }
          case 'beforeCreate': {
            OnEvent(eventNames.beforeCreate)(...args);
            logger.log(
              `Wiring ${eventNames.beforeCreate} to beforeCreate method`,
            );
            break;
          }
          case 'beforeUpdate': {
            OnEvent(eventNames.beforeUpdate)(...args);
            logger.log(
              `Wiring ${eventNames.beforeUpdate} to beforeUpdate method`,
            );
            break;
          }
          case 'beforeDelete': {
            OnEvent(eventNames.beforeDelete)(...args);
            logger.log(
              `Wiring ${eventNames.beforeDelete} to beforeDelete method`,
            );
            break;
          }
        }
      }
    }
  };
}
