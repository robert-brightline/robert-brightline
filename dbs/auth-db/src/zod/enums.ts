import { z } from 'zod';
import * as External from '@robert-brightline/zod';
export const OperationEnum = z.enum([
  'READ',
  'WRITE',
  'UPDATE',
  'DELETE',
  'MANAGE',
  'TRIGGER',
  'NOTIFY',
  'APPROVE',
  'START',
  'STOP',
  'RESTART',
  'REJECT',
  'SUBMIT',
  'ARCHIVE',
  'RESTORE',
  'EXPORT',
  'IMPORT',
  'GRANT',
  'REVOKE',
  'LOCK',
  'UNLOCK',
  'SYNC',
  'DEPLOY',
  'ROLLBACK',
]);
export const OperationEnumFilter = z.object({
  equals: OperationEnum.optional(),
  in: OperationEnum.array().optional(),
  notIn: OperationEnum.array().optional(),
  not: OperationEnum.optional(),
});
export const OperationEnumArrayFilter = z.object({
  equals: OperationEnum.array().optional(),
  has: OperationEnum.optional(),
  hasEvery: OperationEnum.array().optional(),
  hasSome: OperationEnum.array().optional(),
  isEmpty: External.bool().optional(),
});
export const AuditLogField = z.enum([
  'id',
  'createdAt',
  'subject',
  'message',
  'operation',
  'operatorId',
]);
export const AppField = z.enum([
  'id',
  'uuid',
  'createdAt',
  'updatedAt',
  'deletedAt',
  'name',
]);
export const ResourceField = z.enum([
  'id',
  'createdAt',
  'updatedAt',
  'deletedAt',
  'name',
]);
export const RoleField = z.enum([
  'id',
  'createdAt',
  'updatedAt',
  'deletedAt',
  'name',
]);
export const RolePermissionsField = z.enum([
  'id',
  'createdAt',
  'updatedAt',
  'deletedAt',
  'roleId',
  'permissionId',
]);
export const PermissionField = z.enum([
  'id',
  'createdAt',
  'updatedAt',
  'deletedAt',
  'operation',
  'appId',
  'resourceId',
]);
export const UserField = z.enum([
  'id',
  'uuid',
  'createdAt',
  'updatedAt',
  'deletedAt',
  'username',
  'password',
]);
export const UserRoleField = z.enum([
  'id',
  'uuid',
  'createdAt',
  'updatedAt',
  'deletedAt',
  'userId',
  'roleId',
]);
export const AccessTokenField = z.enum([
  'id',
  'uuid',
  'createdAt',
  'updatedAt',
  'deletedAt',
  'name',
  'token',
]);
export const AccessTokenPermissionsField = z.enum([
  'id',
  'uuid',
  'createdAt',
  'updatedAt',
  'deletedAt',
  'accessTokenId',
  'permissionId',
]);
