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
      const meta = exception?.meta;
      const message = exception?.message ?? 'Database error';

      const errorResponse = {
        statusCode: 422,
        error: 'Database Error',
        message: message,
        meta: meta,
      };

      // Handle specific Prisma error codes
      const prismaErrorMap: Record<
        string,
        { statusCode: number; error: string }
      > = {
        P1000: { statusCode: 400, error: 'Authentication failed' },
        P1001: { statusCode: 400, error: "Can't reach database server" },
        P1002: { statusCode: 400, error: 'Database request timeout' },
        P1003: { statusCode: 400, error: 'Database does not exist' },
        P1008: { statusCode: 400, error: 'Operations timed out' },
        P1009: { statusCode: 400, error: 'Database already exists' },
        P1010: { statusCode: 400, error: 'Access denied' },
        P1011: {
          statusCode: 400,
          error: 'Error opening a connection to the database',
        },
        P1012: { statusCode: 400, error: 'Invalid connection string' },
        P1013: { statusCode: 400, error: 'Invalid connection string' },
        P1014: {
          statusCode: 400,
          error: 'The underlying error has not been parsed',
        },
        P1015: { statusCode: 400, error: 'Unsupported preview feature' },
        P2000: { statusCode: 400, error: 'Value too long' },
        P2001: { statusCode: 404, error: 'Record not found' },
        P2003: { statusCode: 400, error: 'Foreign key constraint failed' },
        P2004: { statusCode: 400, error: 'Constraint failed on the database' },
        P2005: { statusCode: 400, error: 'Invalid value for column' },
        P2006: { statusCode: 400, error: 'Invalid value for relation' },
        P2007: { statusCode: 400, error: 'Data validation error' },
        P2008: { statusCode: 400, error: 'Failed to parse the query' },
        P2009: { statusCode: 400, error: 'Failed to validate the query' },
        P2010: { statusCode: 400, error: 'Raw query failed' },
        P2011: { statusCode: 400, error: 'Null constraint violation' },
        P2014: { statusCode: 400, error: 'Change data capture is not enabled' },
        P2015: { statusCode: 404, error: 'Related record not found' },
        P2016: { statusCode: 400, error: 'Query interpretation error' },
        P2017: { statusCode: 400, error: 'Foreign key constraint failed' },
        P2018: { statusCode: 400, error: 'Required relation violation' },
        P2019: { statusCode: 400, error: 'Input error' },
        P2020: { statusCode: 400, error: 'Value out of range' },
        P2021: { statusCode: 400, error: 'Table does not exist' },
        P2022: { statusCode: 400, error: 'Column does not exist' },
        P2023: { statusCode: 400, error: 'Inconsistent column data' },
        P2024: {
          statusCode: 500,
          error: 'Timed out fetching a new connection',
        },
        P2025: { statusCode: 404, error: 'Required record not found' },
      };

      if (code && prismaErrorMap[code]) {
        const { statusCode, error } = prismaErrorMap[code];
        errorResponse.statusCode = statusCode;
        errorResponse.error = error;
      }

      response.status(errorResponse.statusCode).json(errorResponse);
    }
  }

  return PrismaErrorFilter;
}
