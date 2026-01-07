import z from 'zod';
import * as External from '@robert-brightline/zod';
import { AccessTokenPermissionsField } from '../enums.js';
import { AccessTokenPermissionsOrder } from './access-token-permissions-order.js';
import { AccessTokenPermissionsWhere } from './access-token-permissions-where.js';
import { AccessTokenPermissionsProjection } from './access-token-permissions-projection.js';

export const AccessTokenPermissionsQuery = z.object({
  distinct: External.prejson(AccessTokenPermissionsField.array().optional()),
  select: External.prejson(AccessTokenPermissionsProjection.optional()),
  orderBy: External.prejson(AccessTokenPermissionsOrder.optional()),
  where: External.prejson(AccessTokenPermissionsWhere.optional()),
  take: External.int().min(0).optional(),
  skip: External.int().min(0).optional(),
});

export const AccessTokenPermissionsOnlyProjection = z.object({
  select: External.prejson(AccessTokenPermissionsProjection.optional()),
});
