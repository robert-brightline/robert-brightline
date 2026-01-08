import { EventListener, type CrudListener } from '@robert-brightline/nest';
import type { Any } from '@robert-brightline/types';
import { inspect } from 'util';

@EventListener()
export class UserListener implements CrudListener {
  onRead(payload: Any): void | Promise<void> {
    console.log('onRead: ', inspect(payload, true, 1000));
  }

  onCreate(payload: Any): void | Promise<void> {
    console.log('onCreate: ', inspect(payload, true, 1000));
  }

  onUpdate(payload: Any): void | Promise<void> {
    console.log('onUpdate: ', inspect(payload, true, 1000));
  }

  onDelete(payload: Any): void | Promise<void> {
    console.log('onDelete: ', inspect(payload, true, 1000));
  }

  beforeCreate(payload: Any): void | Promise<void> {
    console.log('beforeCreate: ', inspect(payload, true, 1000));
  }

  beforeRead(payload: Any): void | Promise<void> {
    console.log('beforeRead: ', inspect(payload, true, 1000));
  }

  beforeDelete(payload: Any): void | Promise<void> {
    console.log('beforeDelete: ', inspect(payload, true, 1000));
  }

  beforeUpdate(payload: Any): void | Promise<void> {
    console.log('beforeUpdate: ', inspect(payload, true, 1000));
  }
}
