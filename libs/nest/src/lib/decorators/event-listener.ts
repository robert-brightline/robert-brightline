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

    for (const mn of methods) {
      const desc = getDescriptor(target, mn);

      if (isFunction(desc?.value)) {
        const args = [target, mn, desc] as Parameters<MethodDecorator>;
  
        const _on = crudEventDecorators(kebab);

        isThen<CrudListenerMethod>(mn as CrudListenerMethod)
          .is(['beforeCreate'], () => _on.beforeCreate()(...args))
          .is(['beforeDelete'], () => _on.beforeDelete()(...args))
          .is(['beforeUpdate'], () => _on.beforeUpdate()(...args))
          .is(['beforeRead'], () => _on.beforeRead()(...args))
          .is(['onCreate'], () => _on.onCreate()(...args))
          .is(['onRead'], () => _on.onRead()(...args))
          .is(['onUpdate'], () => _on.onUpdate()(...args))
          .is(['onDelete'], () => _on.onDelete()(...args));
      }
    }
  };
}
