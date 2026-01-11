import { Injectable } from '@nestjs/common';
import { names } from '@robert-brightline/names';
import {
  getDescriptor,
  getMethodNames,
  isFunction,
  isThen,
} from '@robert-brightline/utils';
import { crudEventDecorators } from '../helpers/crud-event-decorators.js';
import { resourceName } from '../helpers/resource-name.js';
import type { CrudListenerMethod } from '../interfaces/crud-listener.js';

export function EventListener(): ClassDecorator {
  return (target) => {
    Injectable()(target);
    const { kebab } = names(resourceName(target.name));
    const methods = getMethodNames(target);

    for (const methodName of methods) {
      const descriptor = getDescriptor(target, methodName);

      if (isFunction(descriptor?.value)) {
        const args = [
          target,
          methodName,
          descriptor,
        ] as Parameters<MethodDecorator>;

        const _event = crudEventDecorators(kebab);

        isThen<CrudListenerMethod>(methodName as CrudListenerMethod)
          .is(['beforeCreate'], () => _event.beforeCreate()(...args))
          .is(['beforeDelete'], () => _event.beforeDelete()(...args))
          .is(['beforeUpdate'], () => _event.beforeUpdate()(...args))
          .is(['beforeRead'], () => _event.beforeRead()(...args))
          .is(['onCreate'], () => _event.onCreate()(...args))
          .is(['onRead'], () => _event.onRead()(...args))
          .is(['onUpdate'], () => _event.onUpdate()(...args))
          .is(['onDelete'], () => _event.onDelete()(...args));
      }
    }
  };
}
