import { Param, Body as _Body, Query as _Query } from '@nestjs/common';
import type { ZodType } from 'zod';

export function ParamId(): ParameterDecorator {
  return (...args) => {
    Param('id')(...args);
  };
}

export function Query(schema: ZodType): ParameterDecorator {
  return (...args) => {
    _Query({
      transform(value) {
        return schema.parse(value);
      },
    })(...args);
  };
}

export function Body(schema: ZodType): ParameterDecorator {
  return (...args) => {
    _Body({
      transform(value) {
        return schema.parse(value);
      },
    })(...args);
  };
}
