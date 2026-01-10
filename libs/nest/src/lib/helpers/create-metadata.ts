import { SetMetadata, type ExecutionContext } from '@nestjs/common';
import type { Reflector } from '@nestjs/core';

export type CreateMetadata<T> = {
  getMetadata: (context: ExecutionContext, reflector: Reflector) => T;
  setClassMetadata: (value?: T) => ClassDecorator;
  setMethodMetadata: (value?: T) => MethodDecorator;
};

export function createMetadata<T>(key: string): CreateMetadata<T> {
  function getMetadata(context: ExecutionContext, reflector: Reflector) {
    return reflector.getAllAndOverride(key, [
      context.getClass(),
      context.getHandler(),
    ]);
  }

  function setClassMetadata(value?: T): ClassDecorator {
    return (...args) => {
      SetMetadata(key, value ?? true)(...args);
    };
  }

  function setMethodMetadata(value?: T): MethodDecorator {
    return (...args) => {
      SetMetadata(key, value ?? true)(...args);
    };
  }
  
  return {
    getMetadata,
    setClassMetadata,
    setMethodMetadata,
  };
}
