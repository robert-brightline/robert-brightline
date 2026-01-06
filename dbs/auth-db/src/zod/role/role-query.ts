import z from 'zod';
import * as External from '@robert-brightline/zod';
import { RoleField } from '../enums.js';
import { RoleOrder } from './role-order.js';
import { RoleWhere } from './role-where.js';
import { RoleProjection } from './role-projection.js';

export const RoleQuery = z.object({
  distinct: RoleField.array().optional(),
  select: RoleProjection.optional(),
  orderBy: RoleOrder.optional(),
  where: RoleWhere.optional(),
  take: External.int().min(0).optional(),
  skip: External.int().min(0).optional(),
});
