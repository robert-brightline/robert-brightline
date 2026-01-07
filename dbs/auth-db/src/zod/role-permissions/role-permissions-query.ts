import z from 'zod';
import * as External from '@robert-brightline/zod';
import { RolePermissionsField } from '../enums.js';
import { RolePermissionsOrder } from './role-permissions-order.js';
import { RolePermissionsWhere } from './role-permissions-where.js';
import { RolePermissionsProjection } from './role-permissions-projection.js';

export const RolePermissionsQuery = z.object({
  distinct: External.prejson(RolePermissionsField.array().optional()),
  select: External.prejson(RolePermissionsProjection.optional()),
  orderBy: External.prejson(RolePermissionsOrder.optional()),
  where: External.prejson(RolePermissionsWhere.optional()),
  take: External.int().min(0).optional(),
  skip: External.int().min(0).optional(),
});
