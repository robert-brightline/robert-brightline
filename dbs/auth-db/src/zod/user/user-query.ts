import z from 'zod';
import * as External from '@robert-brightline/zod';
import { UserField } from '../enums.js';
import { UserOrder } from './user-order.js';
import { UserWhere } from './user-where.js';
import { UserProjection } from './user-projection.js';

export const UserQuery = z.object({
  distinct: External.prejson(UserField.array().optional()),
  select: External.prejson(UserProjection.optional()),
  orderBy: External.prejson(UserOrder.optional()),
  where: External.prejson(UserWhere.optional()),
  take: External.int().min(0).optional(),
  skip: External.int().min(0).optional(),
});
