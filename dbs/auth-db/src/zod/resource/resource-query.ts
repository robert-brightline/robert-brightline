import z from 'zod';
import * as External from '@robert-brightline/zod';
import { ResourceField } from '../enums.js';
import { ResourceOrder } from './resource-order.js';
import { ResourceWhere } from './resource-where.js';
import { ResourceProjection } from './resource-projection.js';

export const ResourceQuery = z.object({
  distinct: External.prejson(ResourceField.array().optional()),
  select: External.prejson(ResourceProjection.optional()),
  orderBy: External.prejson(ResourceOrder.optional()),
  where: External.prejson(ResourceWhere.optional()),
  take: External.int().min(0).optional(),
  skip: External.int().min(0).optional(),
});
