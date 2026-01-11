import { Logger } from '@nestjs/common';
import { EventListener, type CrudListener } from '@robert-brightline/nest';
import type { Any } from '@robert-brightline/types';
import { inspect } from 'util';

@EventListener()
export class UserListener implements CrudListener {
  protected logger = new Logger(UserListener.name);

  // onRead(payload: Any): void | Promise<void> {
  //   this.logger.log('onRead:');
  //   this.logger.log(inspect(payload, true, 1000));
  // }

  onCreate(payload: Any): void | Promise<void> {
    this.logger.log('onCreate:');
    this.logger.log(inspect(payload, true, 1000));
  }

  // onUpdate(payload: Any): void | Promise<void> {
  //   this.logger.log('onUpdate:');
  //   this.logger.log(inspect(payload, true, 1000));
  // }

  // onDelete(payload: Any): void | Promise<void> {
  //   this.logger.log('onDelete:');
  //   this.logger.log(inspect(payload, true, 1000));
  // }

  // beforeCreate(payload: Any): void | Promise<void> {
  //   this.logger.log('beforeCreate:');
  //   this.logger.log(inspect(payload, true, 1000));
  // }

  // beforeRead(payload: Any): void | Promise<void> {
  //   this.logger.log('beforeRead:');
  //   this.logger.log(inspect(payload, true, 1000));
  // }

  // beforeDelete(payload: Any): void | Promise<void> {
  //   this.logger.log('beforeDelete:');
  //   this.logger.log(inspect(payload, true, 1000));
  // }

  // beforeUpdate(payload: Any): void | Promise<void> {
  //   this.logger.log('beforeUpdate:');
  //   this.logger.log(inspect(payload, true, 1000));
  // }
}
