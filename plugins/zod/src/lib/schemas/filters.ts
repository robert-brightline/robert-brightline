import type { Any } from '@robert-brightline/types';
import { z } from 'zod';
import { bool, date, datetime, int, num, str } from './primitives.js';

// String filters
export const StringFilter: z.ZodType<Any> = z.object({
  equals: str().optional(),
  in: z.array(z.string()).optional(),
  notIn: z.array(z.string()).optional(),
  lt: str().optional(),
  lte: str().optional(),
  gt: str().optional(),
  gte: str().optional(),
  contains: str().optional(),
  startsWith: str().optional(),
  endsWith: str().optional(),
  mode: z.enum(['default', 'insensitive']).optional(),
  not: z.lazy((): z.ZodType<Any> => StringFilter).optional(),
});

// Number filters
export const NumberFilter: z.ZodType<Any> = z.object({
  equals: num().optional(),
  in: z.array(num()).optional(),
  notIn: z.array(num()).optional(),
  lt: num().optional(),
  lte: num().optional(),
  gt: num().optional(),
  gte: num().optional(),
  not: z.lazy((): z.ZodType<Any> => NumberFilter).optional(),
});

// Int filters
export const IntegerFilter: z.ZodType<Any> = z.object({
  equals: int().optional(),
  in: z.array(int()).optional(),
  notIn: z.array(int()).optional(),
  lt: int().optional(),
  lte: int().optional(),
  gt: int().optional(),
  gte: int().optional(),
  not: z.lazy((): z.ZodType<Any> => IntegerFilter).optional(),
});

// Boolean filters
export const BooleanFilter: z.ZodType<Any> = z.object({
  equals: bool().optional(),
  not: z.lazy((): z.ZodType<Any> => BooleanFilter).optional(),
});

// DateTime filters
export const DateTimeFilter: z.ZodType<Any> = z.object({
  equals: datetime().optional(),
  in: z.array(datetime()).optional(),
  notIn: z.array(datetime()).optional(),
  lt: datetime().optional(),
  lte: datetime().optional(),
  gt: datetime().optional(),
  gte: datetime().optional(),
  not: z.lazy((): z.ZodType<Any> => DateTimeFilter).optional(),
});

// DateTime filters
export const DateFilter: z.ZodType<Any> = z.object({
  equals: date().optional(),
  in: z.array(date()).optional(),
  notIn: z.array(date()).optional(),
  lt: date().optional(),
  lte: date().optional(),
  gt: date().optional(),
  gte: date().optional(),
  not: z.lazy((): z.ZodType<Any> => DateFilter).optional(),
});

export const ArrayStringFilter = z.object({
  equals: str().array().optional(),
  has: str().optional(),
  hasEvery: str().array().optional(),
  hasSome: str().array().optional(),
  isEmpty: bool(),
});

export const ArrayNumberFilter = z.object({
  equals: num().array().optional(),
  has: num().optional(),
  hasEvery: num().array().optional(),
  hasSome: num().array().optional(),
  isEmpty: bool(),
});

export const ArrayIntegerFilter = z.object({
  equals: int().array().optional(),
  has: int().optional(),
  hasEvery: int().array().optional(),
  hasSome: int().array().optional(),
  isEmpty: bool(),
});

// equals: ['APP'],
//       has: 'APP',
//       hasEvery: ['APP'],
//       hasSome: ['APP'],
//       isEmpty: true,
