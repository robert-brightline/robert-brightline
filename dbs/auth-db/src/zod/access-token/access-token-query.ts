
import z from 'zod';
import * as External from '@robert-brightline/zod';
import { AccessTokenField } from '../enums.js';
import { AccessTokenOrder } from './access-token-order.js';
import { AccessTokenWhere } from './access-token-where.js';
import { AccessTokenProjection } from './access-token-projection.js';

export const AccessTokenQuery = z.object({
  distinct: AccessTokenField.array().optional(),
  select: AccessTokenProjection.optional(),
  orderBy: AccessTokenOrder.optional(),
  where: AccessTokenWhere.optional(),
  take: External.int().min(0).optional(),
  skip: External.int().min(0).optional(),
});
        