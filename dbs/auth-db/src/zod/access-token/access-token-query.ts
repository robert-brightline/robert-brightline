import z from 'zod';
import * as External from '@robert-brightline/zod';
import { AccessTokenField } from '../enums.js';
import { AccessTokenOrder } from './access-token-order.js';
import { AccessTokenWhere } from './access-token-where.js';
import { AccessTokenProjection } from './access-token-projection.js';

export const AccessTokenQuery = z.object({
  distinct: External.prejson(AccessTokenField.array().optional()),
  select: External.prejson(AccessTokenProjection.optional()),
  orderBy: External.prejson(AccessTokenOrder.optional()),
  where: External.prejson(AccessTokenWhere.optional()),
  take: External.int().min(0).optional(),
  skip: External.int().min(0).optional(),
});

export const AccessTokenOnlyProjection = z.object({
  select: External.prejson(AccessTokenProjection.optional()),
});
