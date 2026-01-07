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

      // 1. Determine if it's a Zod error
      const isZodError = errors.some(
        (e) => e.name?.includes('Zod') || exception.name === 'ZodError',
      );

      if (isZodError) {
        // 2. Instead of 'throw', send the response directly
        return response.status(422).json({
          statusCode: 422,
          message: 'Validation failed',
          errors: exception.errors || exception.format?.() || exception,
        });
      }

      // 3. Fallback for unknown errors (optional, usually 500)
      return response.status(500).json({
        message: 'Internal server error',
      });
    }
  }

  return ZodErrorFilter;
}
