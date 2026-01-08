import type { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
import { Catch } from '@nestjs/common';
import type { Any } from '@robert-brightline/types';
import type { Response } from 'express';

export function zodExceptionFilter(...errors: Any[]) {
  @Catch(...errors)
  class ZodErrorFilter implements ExceptionFilter {
    catch(exception: Any, host: ArgumentsHost) {
      const ctx = host.switchToHttp();
      const response = ctx.getResponse<Response>();

      const isZodError = errors.some((e) => e.name?.includes('Zod'));

      if (isZodError) {
        response.status(422).json({
          statusCode: 422,
          message: 'Validation failed',
          errors: exception.errors || exception.format?.() || exception,
        });
      }
    }
  }

  return ZodErrorFilter;
}
