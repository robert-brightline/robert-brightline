
import z from 'zod';
import * as External from '@robert-brightline/zod';
import * as Internal from '../internals.js';
import { UserField } from '../enums.js';
import { UserOrder } from './user>-order.js';
import { UserWhere } from './user>-where.js';
import { UserProjection } from './user>-projection.js';

export const UserQuery = z.object({
  distinct: UserField.array().optional(),
  select: UserProjection.optional(),
  orderBy: UserOrder.optional(),
  where: UserWhere.optional(),
  take: External.int().min(0).optional(),
  skip: External.int().min(0).optional(),
});
        