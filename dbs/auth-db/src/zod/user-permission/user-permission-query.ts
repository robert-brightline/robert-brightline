import z from 'zod';
import * as External from '@robert-brightline/zod';
import { UserPermissionField } from '../enums.js';
import { UserPermissionOrder } from './user-permission-order.js';
import { UserPermissionWhere } from './user-permission-where.js';
import { UserPermissionProjection } from './user-permission-projection.js';

export const UserPermissionQuery = z.object({
  distinct: External.prejson(UserPermissionField.array().optional()),
  select: External.prejson(UserPermissionProjection.optional()),
  orderBy: External.prejson(UserPermissionOrder.optional()),
  where: External.prejson(UserPermissionWhere.optional()),
  take: External.int().min(0).optional(),
  skip: External.int().min(0).optional(),
});

export const UserPermissionOnlyProjection = z.object({
  select: External.prejson(UserPermissionProjection.optional()),
});
