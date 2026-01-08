import type { Provider } from '@nestjs/common';
import {
  Inject,
  Injectable,
  type CallHandler,
  type ExecutionContext,
  type NestInterceptor,
} from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { names } from '@robert-brightline/names';
import { crudEventNames, resourceName } from '@robert-brightline/nest-common';
import type { Any } from '@robert-brightline/types';
import { tap, type Observable } from 'rxjs';
import type { CrudController } from '../interfaces/crud-controller.js';

@Injectable()
export class CrudEventInterceptor implements NestInterceptor {
  constructor(
    @Inject(EventEmitter2) protected readonly emitter: EventEmitter2,
  ) {}
  intercept(
    context: ExecutionContext,
    next: CallHandler<Any>,
  ): Observable<Any> | Promise<Observable<Any>> {
    const targetMethod = context.getHandler();
    const targetClass = context.getClass<string>();
    const { kebab } = names(resourceName(targetClass.name));
    const operationName = targetMethod.name;
    const eventNames = crudEventNames(kebab);

    const request = context.switchToHttp().getRequest();
    const body = request.body;
    const query = request.query;
    const params = request.params;

    switch (operationName as keyof CrudController) {
      case 'create': {
        this.emitter.emit(eventNames.beforeCreate, { body, query });
        break;
      }
      case 'readOneById':
      case 'read': {
        this.emitter.emit(eventNames.beforeRead, { query, params });
        break;
      }
      case 'update': {
        this.emitter.emit(eventNames.update, { params, query, body });
        break;
      }
      case 'delete': {
        this.emitter.emit(eventNames.delete, { params, query });
        break;
      }
    }

    return next.handle().pipe(
      tap((value) => {
        switch (operationName as keyof CrudController) {
          case 'create': {
            this.emitter.emit(eventNames.create, value);
            break;
          }
          case 'readOneById':
          case 'read': {
            this.emitter.emit(eventNames.read, value);
            break;
          }
          case 'update': {
            this.emitter.emit(eventNames.update, value);
            break;
          }
          case 'delete': {
            this.emitter.emit(eventNames.delete, value);
            break;
          }
        }
      }),
    );
  }
}

export function provideCrudEventInterceptor(): Provider {
  return {
    provide: APP_INTERCEPTOR,
    useClass: CrudEventInterceptor,
  };
}
