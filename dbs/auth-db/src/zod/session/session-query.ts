import z from 'zod';
import * as External from '@robert-brightline/zod';
import { SessionField } from '../enums.js';
import { SessionOrder } from './session-order.js';
import { SessionWhere } from './session-where.js';
import { SessionProjection } from './session-projection.js';

export const SessionQuery = z.object({
  distinct: External.prejson(SessionField.array().optional()),
  select: External.prejson(SessionProjection.optional()),
  orderBy: External.prejson(SessionOrder.optional()),
  where: External.prejson(SessionWhere.optional()),
  take: External.int().min(0).optional(),
  skip: External.int().min(0).optional(),
});

export const SessionOnlyProjection = z.object({
  select: External.prejson(SessionProjection.optional()),
});
