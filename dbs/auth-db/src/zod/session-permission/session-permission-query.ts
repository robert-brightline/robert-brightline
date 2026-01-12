import z from 'zod';
import * as External from '@robert-brightline/zod';
import { SessionPermissionField } from '../enums.js';
import { SessionPermissionOrder } from './session-permission-order.js';
import { SessionPermissionWhere } from './session-permission-where.js';
import { SessionPermissionProjection } from './session-permission-projection.js';

export const SessionPermissionQuery = z.object({
  distinct: External.prejson(SessionPermissionField.array().optional()),
  select: External.prejson(SessionPermissionProjection.optional()),
  orderBy: External.prejson(SessionPermissionOrder.optional()),
  where: External.prejson(SessionPermissionWhere.optional()),
  take: External.int().min(0).optional(),
  skip: External.int().min(0).optional(),
});

export const SessionPermissionOnlyProjection = z.object({
  select: External.prejson(SessionPermissionProjection.optional()),
});
