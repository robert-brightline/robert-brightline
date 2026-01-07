import z from 'zod';
import * as External from '@robert-brightline/zod';
import { PermissionField } from '../enums.js';
import { PermissionOrder } from './permission-order.js';
import { PermissionWhere } from './permission-where.js';
import { PermissionProjection } from './permission-projection.js';

export const PermissionQuery = z.object({
  distinct: External.prejson(PermissionField.array().optional()),
  select: External.prejson(PermissionProjection.optional()),
  orderBy: External.prejson(PermissionOrder.optional()),
  where: External.prejson(PermissionWhere.optional()),
  take: External.int().min(0).optional(),
  skip: External.int().min(0).optional(),
});
