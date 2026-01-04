import type { Any } from '@robert-brightline/types';
import { z } from 'zod';

// String filters
export const StringFilterSchema: z.ZodType<Any> = z.object({
  equals: z.string().optional(),
  in: z.array(z.string()).optional(),
  notIn: z.array(z.string()).optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.enum(['default', 'insensitive']).optional(),
  not: z.lazy((): z.ZodType<Any> => StringFilterSchema).optional(),
});

// Int filters
export const IntFilterSchema: z.ZodType<Any> = z.object({
  equals: z.number().int().optional(),
  in: z.array(z.number().int()).optional(),
  notIn: z.array(z.number().int()).optional(),
  lt: z.number().int().optional(),
  lte: z.number().int().optional(),
  gt: z.number().int().optional(),
  gte: z.number().int().optional(),
  not: z.lazy((): z.ZodType<Any> => IntFilterSchema).optional(),
});

// Boolean filters
export const BooleanFilterSchema: z.ZodType<Any> = z.object({
  equals: z.boolean().optional(),
  not: z.lazy((): z.ZodType<Any> => BooleanFilterSchema).optional(),
});

// DateTime filters
export const DateTimeFilterSchema: z.ZodType<Any> = z.object({
  equals: z.coerce.date().optional(),
  in: z.array(z.coerce.date()).optional(),
  notIn: z.array(z.coerce.date()).optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.lazy((): z.ZodType<Any> => DateTimeFilterSchema).optional(),
});

// Float filters
export const FloatFilterSchema: z.ZodType<Any> = z.object({
  equals: z.number().optional(),
  in: z.array(z.number()).optional(),
  notIn: z.array(z.number()).optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.lazy((): z.ZodType<Any> => FloatFilterSchema).optional(),
});

// Null filters
export const NullableStringFilterSchema: z.ZodType<Any> = z.object({
  equals: z.string().nullable().optional(),
  in: z.array(z.string()).nullable().optional(),
  notIn: z.array(z.string()).nullable().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.enum(['default', 'insensitive']).optional(),
  not: z
    .lazy((): z.ZodType<Any> => NullableStringFilterSchema)
    .nullable()
    .optional(),
  isSet: z.boolean().optional(),
});
