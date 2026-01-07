import z from 'zod';
import * as External from '@robert-brightline/zod';
import { AppField } from '../enums.js';
import { AppOrder } from './app-order.js';
import { AppWhere } from './app-where.js';
import { AppProjection } from './app-projection.js';

export const AppQuery = z.object({
  distinct: External.prejson(AppField.array().optional()),
  select: External.prejson(AppProjection.optional()),
  orderBy: External.prejson(AppOrder.optional()),
  where: External.prejson(AppWhere.optional()),
  take: External.int().min(0).optional(),
  skip: External.int().min(0).optional(),
});
