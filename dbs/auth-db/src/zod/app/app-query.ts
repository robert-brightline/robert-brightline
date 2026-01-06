import z from 'zod';
import * as External from '@robert-brightline/zod';
import { AppField } from '../enums.js';
import { AppOrder } from './app-order.js';
import { AppWhere } from './app-where.js';
import { AppProjection } from './app-projection.js';

export const AppQuery = z.object({
  distinct: AppField.array().optional(),
  select: AppProjection.optional(),
  orderBy: AppOrder.optional(),
  where: AppWhere.optional(),
  take: External.int().min(0).optional(),
  skip: External.int().min(0).optional(),
});
