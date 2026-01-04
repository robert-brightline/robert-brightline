import z from 'zod';
import { str } from './primitives.js';

export const sensitivity = () => z.enum(['default', 'insensitive']);

export const strFilter = () => {
  const shape = {
    equals: str().optional(),
    in: str().array().optional(),
    notIn: str().array().optional(),
    lt: str().optional(),
    lte: str().optional(),
    gt: str().optional(),
    gte: str().optional(),
    contains: str().optional(),
    startsWith: str().optional(),
    endsWith: str().optional(),
    mode: sensitivity().optional,
  };

  return z.object({ ...shape, not: z.object(shape) });
};
