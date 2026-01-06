
import z from 'zod';
import * as External from '@robert-brightline/zod';
import { ResourceField } from '../enums.js';
import { ResourceOrder } from './resource-order.js';
import { ResourceWhere } from './resource-where.js';
import { ResourceProjection } from './resource-projection.js';

export const ResourceQuery = z.object({
  distinct: ResourceField.array().optional(),
  select: ResourceProjection.optional(),
  orderBy: ResourceOrder.optional(),
  where: ResourceWhere.optional(),
  take: External.int().min(0).optional(),
  skip: External.int().min(0).optional(),
});
        