import z from 'zod';
import * as External from '@robert-brightline/zod';
import { PermissionField } from '../enums.js';
import { PermissionOrder } from './permission-order.js';
import { PermissionWhere } from './permission-where.js';
import { PermissionProjection } from './permission-projection.js';

export const PermissionQuery = z.object({
  distinct: PermissionField.array().optional(),
  select: PermissionProjection.optional(),
  orderBy: PermissionOrder.optional(),
  where: PermissionWhere.optional(),
  take: External.int().min(0).optional(),
  skip: External.int().min(0).optional(),
});
