
import z from 'zod';
import * as External from '@robert-brightline/zod';
import * as Internal from '../internals.js';
import { ProductField } from '../enums.js';
import { ProductOrder } from './product>-order.js';
import { ProductWhere } from './product>-where.js';
import { ProductProjection } from './product>-projection.js';

export const ProductQuery = z.object({
  distinct: ProductField.array().optional(),
  select: ProductProjection.optional(),
  orderBy: ProductOrder.optional(),
  where: ProductWhere.optional(),
  take: External.int().min(0).optional(),
  skip: External.int().min(0).optional(),
});
        