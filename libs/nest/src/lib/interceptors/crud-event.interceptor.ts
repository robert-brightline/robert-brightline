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
import type { Any } from '@robert-brightline/types';
import { isThen } from '@robert-brightline/utils';
import { tap, type Observable } from 'rxjs';
import { crudEventNames } from '../helpers/crud-event-names.js';
import { resourceName } from '../helpers/resource-name.js';
import type { CrudOperationName } from '../interfaces/crud-controller.js';
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
    const en = crudEventNames(kebab);

    const request = context.switchToHttp().getRequest();
    const body = request.body;
    const query = request.query;
    const params = request.params;

    const emit = (name: string, value: Any) => this.emitter.emit(name, value);

    isThen<CrudOperationName>(operationName as CrudOperationName)
      .is(['create'], () => emit(en.beforeCreate, { body, query }))
      .is(['update'], () => emit(en.beforeUpdate, { body, query }))
      .is(['delete'], () => emit(en.beforeDelete, { body, query }))
      .is(['read', 'readOneById'], () =>
        emit(en.beforeRead, { query, params }),
      );

    return next.handle().pipe(
      tap((res) => {
        isThen<CrudOperationName>(operationName as CrudOperationName)
          .is(['create'], () => emit(en.create, { res, query, body }))
          .is(['update'], () => emit(en.update, { res, query, body }))
          .is(['delete'], () => emit(en.delete, { res, query, body }))
          .is(['read', 'readOneById'], () =>
            emit(en.beforeRead, { res, query, params }),
          );
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
