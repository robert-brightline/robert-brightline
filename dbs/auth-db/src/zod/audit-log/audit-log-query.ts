import z from 'zod';
import * as External from '@robert-brightline/zod';
import { AuditLogField } from '../enums.js';
import { AuditLogOrder } from './audit-log-order.js';
import { AuditLogWhere } from './audit-log-where.js';
import { AuditLogProjection } from './audit-log-projection.js';

export const AuditLogQuery = z.object({
  distinct: AuditLogField.array().optional(),
  select: AuditLogProjection.optional(),
  orderBy: AuditLogOrder.optional(),
  where: AuditLogWhere.optional(),
  take: External.int().min(0).optional(),
  skip: External.int().min(0).optional(),
});
