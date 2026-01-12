import { z } from 'zod';

export const AppField = z.enum([
  'id',
  'uuid',
  'createdAt',
  'updatedAt',
  'deletedAt',
  'name',
  'version',
  'description',
]);
export const ResourceField = z.enum([
  'id',
  'createdAt',
  'name',
  'appName',
  'appId',
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
  'appName',
  'appId',
  'roleName',
  'roleId',
  'resourceName',
  'resourceId',
  'operationName',
  'permissionId',
]);
export const PermissionField = z.enum([
  'id',
  'createdAt',
  'appId',
  'resourceId',
  'appName',
  'resourceName',
  'operationName',
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
export const UserPermissionField = z.enum([
  'id',
  'createdAt',
  'updatedAt',
  'deletedAt',
  'userId',
  'permissionId',
]);
export const SessionField = z.enum([
  'id',
  'createdAt',
  'username',
  'token',
  'version',
  'deviceId',
  'deviceType',
  'longitude',
  'latitude',
]);
export const SessionPermissionField = z.enum([
  'id',
  'createdAt',
  'sessionId',
  'permissionId',
  'appName',
  'operationName',
  'resourceName',
]);
