import z from 'zod';
import * as External from '@robert-brightline/zod';
import { RolePermissionsField } from '../enums.js';
import { RolePermissionsOrder } from './role-permissions-order.js';
import { RolePermissionsWhere } from './role-permissions-where.js';
import { RolePermissionsProjection } from './role-permissions-projection.js';

export const RolePermissionsQuery = z.object({
  distinct: RolePermissionsField.array().optional(),
  select: RolePermissionsProjection.optional(),
  orderBy: RolePermissionsOrder.optional(),
  where: RolePermissionsWhere.optional(),
  take: External.int().min(0).optional(),
  skip: External.int().min(0).optional(),
});
