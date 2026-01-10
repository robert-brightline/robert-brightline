import {
  Param,
  ParseIntPipe,
  Body as _Body,
  Query as _Query,
  createParamDecorator,
} from '@nestjs/common';
import type { Any } from '@robert-brightline/types';
import type { ZodType } from 'zod';

export function ParamId(): ParameterDecorator {
  return (...args) => {
    Param('id', ParseIntPipe)(...args);
  };
}

export function Query(schema: ZodType<Any>): ParameterDecorator {
  return (...args) => {
    _Query({
      transform(value) {
        return schema.parse(value);
      },
    })(...args);
  };
}

export function Body(schema: ZodType<Any>): ParameterDecorator {
  return (...args) => {
    _Body({
      transform(value) {
        return schema.parse(value);
      },
    })(...args);
  };
}

export const UserInfo = createParamDecorator((data, context) => {
  return context.switchToHttp().getRequest().user;
});

export const UserId = createParamDecorator((data, context) => {
  return context.switchToHttp().getRequest().user?.id;
});

export const OrgId = createParamDecorator((data, context) => {
  return context.switchToHttp().getRequest().user?.orgId;
});
