import type { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
import { Catch } from '@nestjs/common';
import type { Any } from '@robert-brightline/types';
import type { Response } from 'express';

export function prismaExceptionFilter(...errors: Any[]) {
  @Catch(...errors)
  class PrismaErrorFilter implements ExceptionFilter {
    // Note: We added 'host' here
    catch(exception: Any, host: ArgumentsHost) {
      const ctx = host.switchToHttp();
      const response = ctx.getResponse<Response>();

      const code = exception?.code;
      const name = exception?.name;
      const meta = exception?.meta;
      const message = exception?.message ?? 'Database error';

      const errorResponse = {
        statusCode: 422,
        error: 'Database Error',
        message: message,
        meta: meta,
      };

      // Handle Unique Constraint
      if (code === 'P2002') {
        const target = Array.isArray(meta?.target)
          ? meta.target.join(', ')
          : meta?.target;
        errorResponse.error = 'Unique constraint failed';
        errorResponse.message = target
          ? `Unique constraint failed on the fields: ${target}`
          : message;
      }
      // Handle Validation or other Prisma codes
      else if (
        name === 'PrismaClientValidationError' ||
        /validation/i.test(message) ||
        code?.startsWith('P1') ||
        code?.startsWith('P2')
      ) {
        errorResponse.error = 'Prisma validation error';
      } else {
        // If it's not an error we want to handle, send a 500 or call a default
        return response
          .status(500)
          .json({ statusCode: 500, message: 'Internal Server Error' });
      }

      // SEND the response instead of throwing
      return response.status(422).json(errorResponse);
    }
  }

  return PrismaErrorFilter;
}
