
import z from 'zod';
import * as External from '@robert-brightline/zod';
import * as Internal from '../internals.js';
import { CategoryField } from '../enums.js';
import { CategoryOrder } from './category>-order.js';
import { CategoryWhere } from './category>-where.js';
import { CategoryProjection } from './category>-projection.js';

export const CategoryQuery = z.object({
  distinct: CategoryField.array().optional(),
  select: CategoryProjection.optional(),
  orderBy: CategoryOrder.optional(),
  where: CategoryWhere.optional(),
  take: External.int().min(0).optional(),
  skip: External.int().min(0).optional(),
});
        