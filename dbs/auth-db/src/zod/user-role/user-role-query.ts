
import z from 'zod';
import * as External from '@robert-brightline/zod';
import { UserRoleField } from '../enums.js';
import { UserRoleOrder } from './user-role-order.js';
import { UserRoleWhere } from './user-role-where.js';
import { UserRoleProjection } from './user-role-projection.js';

export const UserRoleQuery = z.object({
  distinct: UserRoleField.array().optional(),
  select: UserRoleProjection.optional(),
  orderBy: UserRoleOrder.optional(),
  where: UserRoleWhere.optional(),
  take: External.int().min(0).optional(),
  skip: External.int().min(0).optional(),
});
        