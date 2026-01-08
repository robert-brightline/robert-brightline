import type { ArgumentsHost, ExceptionFilter, Provider } from '@nestjs/common';
import { Catch } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import type { Any } from '@robert-brightline/types';
import type { Response } from 'express';

@Catch()
export class AppExceptionFilter implements ExceptionFilter {
  catch(exception: Any, host: ArgumentsHost) {
    const res = host.switchToHttp().getResponse<Response>();

    if (exception.name.includes('Zod')) {
      const status = 422;
      res.status(status).json({
        status,
        name: exception.name,
        errors: JSON.parse(exception.message),
      });
    } else if (exception.name.includes('Prisma')) {
      const status = 422;
      res.status(status).json({
        status,
        name: exception.name,
        errors: exception,
      });
    }

    return res;
  }
}

export function provideAppExceptionFilter(): Provider {
  return {
    provide: APP_FILTER,
    useClass: AppExceptionFilter,
  };
}
