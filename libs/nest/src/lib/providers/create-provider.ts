import { Inject, type Provider } from '@nestjs/common';
import type { Any } from '@robert-brightline/types';
import { resourceName } from '../helpers/resource-name.js';

export type ProviderFunctions<T> = {
  token: (name: string, scope?: string) => string;
  provideValue: (name: string, useValue: T, scope?: string) => Provider;
  provideFactory: (
    name: string,
    useFactory: (...args: Any[]) => T,
    injects: Any[],
    scope?: string,
  ) => Provider;
  provideClass: (name: string, useClass: Any) => Provider;
  inject: (name?: string, scope?: string) => ParameterDecorator;
};

/**
 * Create nestjs provider functions including provide, inject, and get token.
 *
 * @param suffix optional token suffix that might be used to group providers
 * @returns
 */
export function createProvider<T>(suffix = ''): ProviderFunctions<T> {
  const token = (name: string, scope = '') =>
    `${scope}_${name}_${suffix}`.toUpperCase();

  const provideValue = (name: string, useValue: T, scope = ''): Provider => {
    return {
      provide: token(name, scope),
      useValue,
    };
  };

  function provideFactory(
    name: string,
    useFactory: (...args: Any[]) => T,
    injects: Any[],
    scope = '',
  ): Provider {
    return {
      inject: injects,
      provide: token(name, scope),
      useFactory,
    };
  }

  function inject(name?: string, scope = ''): ParameterDecorator {
    return (...args) => {
      name = name ?? resourceName((args[0] as Any).name);

      console.log('NAME: ', name);
      Inject(token(name, scope))(...args);
    };
  }

  function provideClass(name: string, useClass: Any, scope = ''): Provider {
    return {
      provide: token(name, scope),
      useClass,
    };
  }
  return {
    token,
    provideValue,
    provideFactory,
    provideClass,
    inject,
  };
}
