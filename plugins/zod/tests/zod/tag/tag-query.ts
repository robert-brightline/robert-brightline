
import z from 'zod';
import * as External from '@robert-brightline/zod';
import * as Internal from '../internals.js';
import { TagField } from '../enums.js';
import { TagOrder } from './tag>-order.js';
import { TagWhere } from './tag>-where.js';
import { TagProjection } from './tag>-projection.js';

export const TagQuery = z.object({
  distinct: TagField.array().optional(),
  select: TagProjection.optional(),
  orderBy: TagOrder.optional(),
  where: TagWhere.optional(),
  take: External.int().min(0).optional(),
  skip: External.int().min(0).optional(),
});
        