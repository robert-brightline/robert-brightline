import * as External from '@robert-brightline/zod';
import { z } from 'zod';
import * as Enums from './enums.js';
export const AuditLogOwnProjection = z.object({
  id: External.bool().optional(),
  createdAt: External.bool().optional(),
  subject: External.bool().optional(),
  message: External.bool().optional(),
  operation: External.bool().optional(),
  operatorId: External.bool().optional(),
});
export const AuditLogOwnOrder = z.object({
  id: External.dir().optional(),
  createdAt: External.dir().optional(),
  subject: External.dir().optional(),
  message: External.dir().optional(),
  operation: External.dir().optional(),
  operatorId: External.dir().optional(),
});
export const AuditLogOwnWhere = z.object({
  id: External.IntegerFilter.optional(),
  createdAt: External.DateTimeFilter.optional(),
  subject: External.StringFilter.optional(),
  message: External.StringFilter.optional(),
  operation: Enums.OperationEnumFilter.optional(),
  operatorId: External.StringFilter.optional(),
});
export const AuditLogOwnCreate = z.object({
  subject: External.str(),
  message: External.str().optional(),
  operation: Enums.OperationEnum,
  operatorId: External.str(),
});
export const AuditLogOwnUpdate = z.object({
  subject: External.str().optional(),
  message: External.str().optional(),
  operation: Enums.OperationEnum.optional(),
  operatorId: External.str().optional(),
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
export const AppOwnProjection = z.object({
  id: External.bool().optional(),
  uuid: External.bool().optional(),
  createdAt: External.bool().optional(),
  updatedAt: External.bool().optional(),
  deletedAt: External.bool().optional(),
  name: External.bool().optional(),
});
export const AppOwnOrder = z.object({
  id: External.dir().optional(),
  uuid: External.dir().optional(),
  createdAt: External.dir().optional(),
  updatedAt: External.dir().optional(),
  deletedAt: External.dir().optional(),
  name: External.dir().optional(),
});
export const AppOwnWhere = z.object({
  id: External.IntegerFilter.optional(),
  uuid: External.StringFilter.optional(),
  createdAt: External.DateTimeFilter.optional(),
  updatedAt: External.DateTimeFilter.optional(),
  deletedAt: External.DateTimeFilter.optional(),
  name: External.StringFilter.optional(),
});
export const AppOwnCreate = z.object({ name: External.name() });
export const AppOwnUpdate = z.object({ name: External.name().optional() });
export const AppRelationProjection = z.union([
  External.bool(),
  z.object({
    select: AppOwnProjection.optional(),
    where: AppOwnWhere.optional(),
  }),
]);
export const AppRelationManyProjection = z.union([
  External.bool(),
  z.object({
    select: AppOwnProjection.optional(),
    where: AppOwnWhere.optional(),
    orderBy: AppOwnOrder.optional(),
    take: External.int().min(0).optional(),
    skip: External.int().min(0).optional(),
  }),
]);
export const AppRelationManyWhere = z.union([
  z.object({ some: AppOwnWhere }),
  z.object({ every: AppOwnWhere }),
  z.object({ none: AppOwnWhere }),
]);
export const AppRelationCreate = z.union([
  External.connect(),
  z.object({
    create: AppOwnCreate,
  }),
]);
export const AppRelationManyCreate = z.union([
  External.connectMany(),
  z.object({
    createMany: z.object({
      data: AppOwnCreate.array(),
    }),
  }),
]);
export const ResourceOwnProjection = z.object({
  id: External.bool().optional(),
  createdAt: External.bool().optional(),
  updatedAt: External.bool().optional(),
  deletedAt: External.bool().optional(),
  name: External.bool().optional(),
});
export const ResourceOwnOrder = z.object({
  id: External.dir().optional(),
  createdAt: External.dir().optional(),
  updatedAt: External.dir().optional(),
  deletedAt: External.dir().optional(),
  name: External.dir().optional(),
});
export const ResourceOwnWhere = z.object({
  id: External.IntegerFilter.optional(),
  createdAt: External.DateTimeFilter.optional(),
  updatedAt: External.DateTimeFilter.optional(),
  deletedAt: External.DateTimeFilter.optional(),
  name: External.StringFilter.optional(),
});
export const ResourceOwnCreate = z.object({ name: External.name() });
export const ResourceOwnUpdate = z.object({ name: External.name().optional() });
export const ResourceRelationProjection = z.union([
  External.bool(),
  z.object({
    select: ResourceOwnProjection.optional(),
    where: ResourceOwnWhere.optional(),
  }),
]);
export const ResourceRelationManyProjection = z.union([
  External.bool(),
  z.object({
    select: ResourceOwnProjection.optional(),
    where: ResourceOwnWhere.optional(),
    orderBy: ResourceOwnOrder.optional(),
    take: External.int().min(0).optional(),
    skip: External.int().min(0).optional(),
  }),
]);
export const ResourceRelationManyWhere = z.union([
  z.object({ some: ResourceOwnWhere }),
  z.object({ every: ResourceOwnWhere }),
  z.object({ none: ResourceOwnWhere }),
]);
export const ResourceRelationCreate = z.union([
  External.connect(),
  z.object({
    create: ResourceOwnCreate,
  }),
]);
export const ResourceRelationManyCreate = z.union([
  External.connectMany(),
  z.object({
    createMany: z.object({
      data: ResourceOwnCreate.array(),
    }),
  }),
]);
export const RoleOwnProjection = z.object({
  id: External.bool().optional(),
  createdAt: External.bool().optional(),
  updatedAt: External.bool().optional(),
  deletedAt: External.bool().optional(),
  name: External.bool().optional(),
});
export const RoleOwnOrder = z.object({
  id: External.dir().optional(),
  createdAt: External.dir().optional(),
  updatedAt: External.dir().optional(),
  deletedAt: External.dir().optional(),
  name: External.dir().optional(),
});
export const RoleOwnWhere = z.object({
  id: External.IntegerFilter.optional(),
  createdAt: External.DateTimeFilter.optional(),
  updatedAt: External.DateTimeFilter.optional(),
  deletedAt: External.DateTimeFilter.optional(),
  name: External.StringFilter.optional(),
});
export const RoleOwnCreate = z.object({ name: External.name() });
export const RoleOwnUpdate = z.object({ name: External.name().optional() });
export const RoleRelationProjection = z.union([
  External.bool(),
  z.object({
    select: RoleOwnProjection.optional(),
    where: RoleOwnWhere.optional(),
  }),
]);
export const RoleRelationManyProjection = z.union([
  External.bool(),
  z.object({
    select: RoleOwnProjection.optional(),
    where: RoleOwnWhere.optional(),
    orderBy: RoleOwnOrder.optional(),
    take: External.int().min(0).optional(),
    skip: External.int().min(0).optional(),
  }),
]);
export const RoleRelationManyWhere = z.union([
  z.object({ some: RoleOwnWhere }),
  z.object({ every: RoleOwnWhere }),
  z.object({ none: RoleOwnWhere }),
]);
export const RoleRelationCreate = z.union([
  External.connect(),
  z.object({
    create: RoleOwnCreate,
  }),
]);
export const RoleRelationManyCreate = z.union([
  External.connectMany(),
  z.object({
    createMany: z.object({
      data: RoleOwnCreate.array(),
    }),
  }),
]);
export const RolePermissionsOwnProjection = z.object({
  id: External.bool().optional(),
  createdAt: External.bool().optional(),
  updatedAt: External.bool().optional(),
  deletedAt: External.bool().optional(),
  roleId: External.bool().optional(),
  permissionId: External.bool().optional(),
});
export const RolePermissionsOwnOrder = z.object({
  id: External.dir().optional(),
  createdAt: External.dir().optional(),
  updatedAt: External.dir().optional(),
  deletedAt: External.dir().optional(),
  roleId: External.dir().optional(),
  permissionId: External.dir().optional(),
});
export const RolePermissionsOwnWhere = z.object({
  id: External.IntegerFilter.optional(),
  createdAt: External.DateTimeFilter.optional(),
  updatedAt: External.DateTimeFilter.optional(),
  deletedAt: External.DateTimeFilter.optional(),
  roleId: External.IntegerFilter.optional(),
  permissionId: External.IntegerFilter.optional(),
});
export const RolePermissionsOwnCreate = z.object({});
export const RolePermissionsOwnUpdate = z.object({});
export const RolePermissionsRelationProjection = z.union([
  External.bool(),
  z.object({
    select: RolePermissionsOwnProjection.optional(),
    where: RolePermissionsOwnWhere.optional(),
  }),
]);
export const RolePermissionsRelationManyProjection = z.union([
  External.bool(),
  z.object({
    select: RolePermissionsOwnProjection.optional(),
    where: RolePermissionsOwnWhere.optional(),
    orderBy: RolePermissionsOwnOrder.optional(),
    take: External.int().min(0).optional(),
    skip: External.int().min(0).optional(),
  }),
]);
export const RolePermissionsRelationManyWhere = z.union([
  z.object({ some: RolePermissionsOwnWhere }),
  z.object({ every: RolePermissionsOwnWhere }),
  z.object({ none: RolePermissionsOwnWhere }),
]);
export const RolePermissionsRelationCreate = z.union([
  External.connect(),
  z.object({
    create: RolePermissionsOwnCreate,
  }),
]);
export const RolePermissionsRelationManyCreate = z.union([
  External.connectMany(),
  z.object({
    createMany: z.object({
      data: RolePermissionsOwnCreate.array(),
    }),
  }),
]);
export const PermissionOwnProjection = z.object({
  id: External.bool().optional(),
  createdAt: External.bool().optional(),
  updatedAt: External.bool().optional(),
  deletedAt: External.bool().optional(),
  operation: External.bool().optional(),
  appId: External.bool().optional(),
  resourceId: External.bool().optional(),
});
export const PermissionOwnOrder = z.object({
  id: External.dir().optional(),
  createdAt: External.dir().optional(),
  updatedAt: External.dir().optional(),
  deletedAt: External.dir().optional(),
  operation: External.dir().optional(),
  appId: External.dir().optional(),
  resourceId: External.dir().optional(),
});
export const PermissionOwnWhere = z.object({
  id: External.IntegerFilter.optional(),
  createdAt: External.DateTimeFilter.optional(),
  updatedAt: External.DateTimeFilter.optional(),
  deletedAt: External.DateTimeFilter.optional(),
  operation: Enums.OperationEnumFilter.optional(),
  appId: External.IntegerFilter.optional(),
  resourceId: External.IntegerFilter.optional(),
});
export const PermissionOwnCreate = z.object({ operation: Enums.OperationEnum });
export const PermissionOwnUpdate = z.object({
  operation: Enums.OperationEnum.optional(),
});
export const PermissionRelationProjection = z.union([
  External.bool(),
  z.object({
    select: PermissionOwnProjection.optional(),
    where: PermissionOwnWhere.optional(),
  }),
]);
export const PermissionRelationManyProjection = z.union([
  External.bool(),
  z.object({
    select: PermissionOwnProjection.optional(),
    where: PermissionOwnWhere.optional(),
    orderBy: PermissionOwnOrder.optional(),
    take: External.int().min(0).optional(),
    skip: External.int().min(0).optional(),
  }),
]);
export const PermissionRelationManyWhere = z.union([
  z.object({ some: PermissionOwnWhere }),
  z.object({ every: PermissionOwnWhere }),
  z.object({ none: PermissionOwnWhere }),
]);
export const PermissionRelationCreate = z.union([
  External.connect(),
  z.object({
    create: PermissionOwnCreate,
  }),
]);
export const PermissionRelationManyCreate = z.union([
  External.connectMany(),
  z.object({
    createMany: z.object({
      data: PermissionOwnCreate.array(),
    }),
  }),
]);
export const UserOwnProjection = z.object({
  id: External.bool().optional(),
  uuid: External.bool().optional(),
  createdAt: External.bool().optional(),
  updatedAt: External.bool().optional(),
  deletedAt: External.bool().optional(),
  username: External.bool().optional(),
  password: External.bool().optional(),
});
export const UserOwnOrder = z.object({
  id: External.dir().optional(),
  uuid: External.dir().optional(),
  createdAt: External.dir().optional(),
  updatedAt: External.dir().optional(),
  deletedAt: External.dir().optional(),
  username: External.dir().optional(),
  password: External.dir().optional(),
});
export const UserOwnWhere = z.object({
  id: External.IntegerFilter.optional(),
  uuid: External.StringFilter.optional(),
  createdAt: External.DateTimeFilter.optional(),
  updatedAt: External.DateTimeFilter.optional(),
  deletedAt: External.DateTimeFilter.optional(),
  username: External.StringFilter.optional(),
  password: External.StringFilter.optional(),
});
export const UserOwnCreate = z.object({
  username: External.email(),
  password: External.password(),
});
export const UserOwnUpdate = z.object({
  username: External.email().optional(),
  password: External.password().optional(),
});
export const UserRelationProjection = z.union([
  External.bool(),
  z.object({
    select: UserOwnProjection.optional(),
    where: UserOwnWhere.optional(),
  }),
]);
export const UserRelationManyProjection = z.union([
  External.bool(),
  z.object({
    select: UserOwnProjection.optional(),
    where: UserOwnWhere.optional(),
    orderBy: UserOwnOrder.optional(),
    take: External.int().min(0).optional(),
    skip: External.int().min(0).optional(),
  }),
]);
export const UserRelationManyWhere = z.union([
  z.object({ some: UserOwnWhere }),
  z.object({ every: UserOwnWhere }),
  z.object({ none: UserOwnWhere }),
]);
export const UserRelationCreate = z.union([
  External.connect(),
  z.object({
    create: UserOwnCreate,
  }),
]);
export const UserRelationManyCreate = z.union([
  External.connectMany(),
  z.object({
    createMany: z.object({
      data: UserOwnCreate.array(),
    }),
  }),
]);
export const UserRoleOwnProjection = z.object({
  id: External.bool().optional(),
  uuid: External.bool().optional(),
  createdAt: External.bool().optional(),
  updatedAt: External.bool().optional(),
  deletedAt: External.bool().optional(),
  userId: External.bool().optional(),
  roleId: External.bool().optional(),
});
export const UserRoleOwnOrder = z.object({
  id: External.dir().optional(),
  uuid: External.dir().optional(),
  createdAt: External.dir().optional(),
  updatedAt: External.dir().optional(),
  deletedAt: External.dir().optional(),
  userId: External.dir().optional(),
  roleId: External.dir().optional(),
});
export const UserRoleOwnWhere = z.object({
  id: External.IntegerFilter.optional(),
  uuid: External.StringFilter.optional(),
  createdAt: External.DateTimeFilter.optional(),
  updatedAt: External.DateTimeFilter.optional(),
  deletedAt: External.DateTimeFilter.optional(),
  userId: External.IntegerFilter.optional(),
  roleId: External.IntegerFilter.optional(),
});
export const UserRoleOwnCreate = z.object({});
export const UserRoleOwnUpdate = z.object({});
export const UserRoleRelationProjection = z.union([
  External.bool(),
  z.object({
    select: UserRoleOwnProjection.optional(),
    where: UserRoleOwnWhere.optional(),
  }),
]);
export const UserRoleRelationManyProjection = z.union([
  External.bool(),
  z.object({
    select: UserRoleOwnProjection.optional(),
    where: UserRoleOwnWhere.optional(),
    orderBy: UserRoleOwnOrder.optional(),
    take: External.int().min(0).optional(),
    skip: External.int().min(0).optional(),
  }),
]);
export const UserRoleRelationManyWhere = z.union([
  z.object({ some: UserRoleOwnWhere }),
  z.object({ every: UserRoleOwnWhere }),
  z.object({ none: UserRoleOwnWhere }),
]);
export const UserRoleRelationCreate = z.union([
  External.connect(),
  z.object({
    create: UserRoleOwnCreate,
  }),
]);
export const UserRoleRelationManyCreate = z.union([
  External.connectMany(),
  z.object({
    createMany: z.object({
      data: UserRoleOwnCreate.array(),
    }),
  }),
]);
export const AccessTokenOwnProjection = z.object({
  id: External.bool().optional(),
  uuid: External.bool().optional(),
  createdAt: External.bool().optional(),
  updatedAt: External.bool().optional(),
  deletedAt: External.bool().optional(),
  name: External.bool().optional(),
  token: External.bool().optional(),
});
export const AccessTokenOwnOrder = z.object({
  id: External.dir().optional(),
  uuid: External.dir().optional(),
  createdAt: External.dir().optional(),
  updatedAt: External.dir().optional(),
  deletedAt: External.dir().optional(),
  name: External.dir().optional(),
  token: External.dir().optional(),
});
export const AccessTokenOwnWhere = z.object({
  id: External.IntegerFilter.optional(),
  uuid: External.StringFilter.optional(),
  createdAt: External.DateTimeFilter.optional(),
  updatedAt: External.DateTimeFilter.optional(),
  deletedAt: External.DateTimeFilter.optional(),
  name: External.StringFilter.optional(),
  token: External.StringFilter.optional(),
});
export const AccessTokenOwnCreate = z.object({
  name: External.name(),
  token: External.str(),
});
export const AccessTokenOwnUpdate = z.object({
  name: External.name().optional(),
  token: External.str().optional(),
});
export const AccessTokenRelationProjection = z.union([
  External.bool(),
  z.object({
    select: AccessTokenOwnProjection.optional(),
    where: AccessTokenOwnWhere.optional(),
  }),
]);
export const AccessTokenRelationManyProjection = z.union([
  External.bool(),
  z.object({
    select: AccessTokenOwnProjection.optional(),
    where: AccessTokenOwnWhere.optional(),
    orderBy: AccessTokenOwnOrder.optional(),
    take: External.int().min(0).optional(),
    skip: External.int().min(0).optional(),
  }),
]);
export const AccessTokenRelationManyWhere = z.union([
  z.object({ some: AccessTokenOwnWhere }),
  z.object({ every: AccessTokenOwnWhere }),
  z.object({ none: AccessTokenOwnWhere }),
]);
export const AccessTokenRelationCreate = z.union([
  External.connect(),
  z.object({
    create: AccessTokenOwnCreate,
  }),
]);
export const AccessTokenRelationManyCreate = z.union([
  External.connectMany(),
  z.object({
    createMany: z.object({
      data: AccessTokenOwnCreate.array(),
    }),
  }),
]);
export const AccessTokenPermissionsOwnProjection = z.object({
  id: External.bool().optional(),
  uuid: External.bool().optional(),
  createdAt: External.bool().optional(),
  updatedAt: External.bool().optional(),
  deletedAt: External.bool().optional(),
  accessTokenId: External.bool().optional(),
  permissionId: External.bool().optional(),
});
export const AccessTokenPermissionsOwnOrder = z.object({
  id: External.dir().optional(),
  uuid: External.dir().optional(),
  createdAt: External.dir().optional(),
  updatedAt: External.dir().optional(),
  deletedAt: External.dir().optional(),
  accessTokenId: External.dir().optional(),
  permissionId: External.dir().optional(),
});
export const AccessTokenPermissionsOwnWhere = z.object({
  id: External.IntegerFilter.optional(),
  uuid: External.StringFilter.optional(),
  createdAt: External.DateTimeFilter.optional(),
  updatedAt: External.DateTimeFilter.optional(),
  deletedAt: External.DateTimeFilter.optional(),
  accessTokenId: External.IntegerFilter.optional(),
  permissionId: External.IntegerFilter.optional(),
});
export const AccessTokenPermissionsOwnCreate = z.object({});
export const AccessTokenPermissionsOwnUpdate = z.object({});
export const AccessTokenPermissionsRelationProjection = z.union([
  External.bool(),
  z.object({
    select: AccessTokenPermissionsOwnProjection.optional(),
    where: AccessTokenPermissionsOwnWhere.optional(),
  }),
]);
export const AccessTokenPermissionsRelationManyProjection = z.union([
  External.bool(),
  z.object({
    select: AccessTokenPermissionsOwnProjection.optional(),
    where: AccessTokenPermissionsOwnWhere.optional(),
    orderBy: AccessTokenPermissionsOwnOrder.optional(),
    take: External.int().min(0).optional(),
    skip: External.int().min(0).optional(),
  }),
]);
export const AccessTokenPermissionsRelationManyWhere = z.union([
  z.object({ some: AccessTokenPermissionsOwnWhere }),
  z.object({ every: AccessTokenPermissionsOwnWhere }),
  z.object({ none: AccessTokenPermissionsOwnWhere }),
]);
export const AccessTokenPermissionsRelationCreate = z.union([
  External.connect(),
  z.object({
    create: AccessTokenPermissionsOwnCreate,
  }),
]);
export const AccessTokenPermissionsRelationManyCreate = z.union([
  External.connectMany(),
  z.object({
    createMany: z.object({
      data: AccessTokenPermissionsOwnCreate.array(),
    }),
  }),
]);
