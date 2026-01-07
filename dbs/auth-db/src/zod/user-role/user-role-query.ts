import z from 'zod';
import * as External from '@robert-brightline/zod';
import { UserRoleField } from '../enums.js';
import { UserRoleOrder } from './user-role-order.js';
import { UserRoleWhere } from './user-role-where.js';
import { UserRoleProjection } from './user-role-projection.js';

export const UserRoleQuery = z.object({
  distinct: External.prejson(UserRoleField.array().optional()),
  select: External.prejson(UserRoleProjection.optional()),
  orderBy: External.prejson(UserRoleOrder.optional()),
  where: External.prejson(UserRoleWhere.optional()),
  take: External.int().min(0).optional(),
  skip: External.int().min(0).optional(),
});
