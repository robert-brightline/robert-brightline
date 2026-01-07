import { Inject, type Provider } from '@nestjs/common';
import type { Any } from '@robert-brightline/types';

export type NamedProviderFunctions<T> = {
  token: (scope?: string) => string;
  provideValue: (useValue: T, scope?: string) => Provider;
  provideFactory: (
    useFactory: (...injecteds: Any[]) => T,
    injects: Any[],
    scope?: string,
  ) => Provider;
  inject: (scope?: string) => ParameterDecorator;
};

export function createNamedProvider<T>(
  name: string,
  suffix = '',
): NamedProviderFunctions<T> {
  const token = (scope = '') => `${scope}_${name}_${suffix}`.toUpperCase();

  const provideValue = (useValue: T, scope = ''): Provider => {
    return {
      provide: token(scope),
      useValue,
    };
  };

  function provideFactory(
    useFactory: (...args: Any[]) => T,
    injects: Any[],
    scope = '',
  ): Provider {
    return {
      inject: injects,
      provide: token(scope),
      useFactory,
    };
  }

  function inject(scope = ''): ParameterDecorator {
    return (...args) => {
      Inject(token(scope))(...args);
    };
  }
  return {
    token,
    provideValue,
    provideFactory,
    inject,
  };
}
