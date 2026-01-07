import * as External from '@robert-brightline/zod';
import { z } from 'zod';
import * as Enums from './enums.js';
export const AuditLogOwnProjection = z.object({
  id: External.bool().optional(),
  createdAt: External.bool().optional(),
  subject: External.bool().optional(),
  message: External.bool().optional(),
  operation: External.bool().optional(),
  operator: External.bool().optional(),
});
export const AuditLogOwnOrder = z.object({
  id: External.dir().optional(),
  createdAt: External.dir().optional(),
  subject: External.dir().optional(),
  message: External.dir().optional(),
  operation: External.dir().optional(),
  operator: External.dir().optional(),
});
export const AuditLogOwnWhere = z.object({
  id: External.IntegerFilter.optional(),
  createdAt: External.DateTimeFilter.optional(),
  subject: External.StringFilter.optional(),
  message: External.StringFilter.optional(),
  operation: Enums.OperationEnumFilter.optional(),
  operator: External.StringFilter.optional(),
});
export const AuditLogOwnCreate = z.object({
  subject: External.str(),
  message: External.str().optional(),
  operation: Enums.OperationEnum,
  operator: External.str(),
});
export const AuditLogOwnUpdate = z.object({
  subject: External.str().optional(),
  message: External.str().optional(),
  operation: Enums.OperationEnum.optional(),
  operator: External.str().optional(),
});
export const AuditLogRelationProjection = z.union([
  External.bool(),
  z.object({
    select: AuditLogOwnProjection.optional(),
    where: AuditLogOwnWhere.optional(),
  }),
]);
export const AuditLogRelationManyProjection = z.union([
  External.bool(),
  z.object({
    select: AuditLogOwnProjection.optional(),
    where: AuditLogOwnWhere.optional(),
    orderBy: AuditLogOwnOrder.optional(),
    take: External.int().min(0).optional(),
    skip: External.int().min(0).optional(),
  }),
]);
export const AuditLogRelationManyWhere = z.union([
  z.object({ some: AuditLogOwnWhere }),
  z.object({ every: AuditLogOwnWhere }),
  z.object({ none: AuditLogOwnWhere }),
]);
export const AuditLogRelationCreate = z.union([
  External.connect(),
  z.object({
    create: AuditLogOwnCreate,
  }),
]);
export const AuditLogRelationManyCreate = z.union([
  External.connectMany(),
  z.object({
    createMany: z.object({
      data: AuditLogOwnCreate.array(),
    }),
  }),
]);
