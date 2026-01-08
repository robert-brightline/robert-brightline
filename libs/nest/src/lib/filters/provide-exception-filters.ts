import type { Provider } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { ZodError } from 'zod';
import { prismaExceptionFilter } from './prisma-exception-filter.js';
import { zodExceptionFilter } from './zod-exception-filter.js';

export function provideExceptionFilters(): Provider[] {
  return [
    {
      provide: APP_FILTER,
      useClass: prismaExceptionFilter(),
    },
    {
      provide: APP_FILTER,
      useClass: zodExceptionFilter(ZodError),
    },
  ];
}
