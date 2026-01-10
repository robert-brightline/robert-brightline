import { OnEvent } from '@nestjs/event-emitter';
import { crudEventNames } from './crud-event-names.js';

function __OnEvent(eventName: string) {
  return function onEventDecorator(): MethodDecorator {
    return (...args) => {
      OnEvent(eventName)(...args);
    };
  };
}

export function crudEventDecorators(kebabCaseResourceName: string) {
  const en = crudEventNames(kebabCaseResourceName);

  return {
    beforeCreate: __OnEvent(en.beforeCreate),
    beforeRead: __OnEvent(en.beforeRead),
    beforeUpdate: __OnEvent(en.beforeUpdate),
    beforeDelete: __OnEvent(en.beforeDelete),
    onCreate: __OnEvent(en.create),
    onRead: __OnEvent(en.read),
    onUpdate: __OnEvent(en.update),
    onDelete: __OnEvent(en.delete),
  };
}
