import * as External from '@robert-brightline/zod';
import { z } from 'zod';
export const AppOwnProjection = z.object({
  id: External.bool().optional(),
  uuid: External.bool().optional(),
  createdAt: External.bool().optional(),
  updatedAt: External.bool().optional(),
  deletedAt: External.bool().optional(),
  name: External.bool().optional(),
  version: External.bool().optional(),
  description: External.bool().optional(),
});
export const AppOwnOrder = z.object({
  id: External.dir().optional(),
  uuid: External.dir().optional(),
  createdAt: External.dir().optional(),
  updatedAt: External.dir().optional(),
  deletedAt: External.dir().optional(),
  name: External.dir().optional(),
  version: External.dir().optional(),
  description: External.dir().optional(),
});
export const AppOwnWhere = z.object({
  id: External.IntegerFilter.optional(),
  uuid: External.StringFilter.optional(),
  createdAt: External.DateTimeFilter.optional(),
  updatedAt: External.DateTimeFilter.optional(),
  deletedAt: External.DateTimeFilter.optional(),
  name: External.StringFilter.optional(),
  version: External.StringFilter.optional(),
  description: External.StringFilter.optional(),
});
export const AppOwnCreate = z.object({
  name: External.name(),
  version: External.str().optional(),
  description: External.desc().optional(),
});
export const AppOwnUpdate = z.object({
  name: External.name().optional(),
  version: External.str().optional(),
  description: External.desc().optional(),
});
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
  name: External.bool().optional(),
  appName: External.bool().optional(),
  appId: External.bool().optional(),
});
export const ResourceOwnOrder = z.object({
  id: External.dir().optional(),
  createdAt: External.dir().optional(),
  name: External.dir().optional(),
  appName: External.dir().optional(),
  appId: External.dir().optional(),
});
export const ResourceOwnWhere = z.object({
  id: External.IntegerFilter.optional(),
  createdAt: External.DateTimeFilter.optional(),
  name: External.StringFilter.optional(),
  appName: External.StringFilter.optional(),
  appId: External.IntegerFilter.optional(),
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
  appName: External.bool().optional(),
  appId: External.bool().optional(),
  roleName: External.bool().optional(),
  roleId: External.bool().optional(),
  resourceName: External.bool().optional(),
  resourceId: External.bool().optional(),
  operationName: External.bool().optional(),
  permissionId: External.bool().optional(),
});
export const RolePermissionsOwnOrder = z.object({
  id: External.dir().optional(),
  createdAt: External.dir().optional(),
  appName: External.dir().optional(),
  appId: External.dir().optional(),
  roleName: External.dir().optional(),
  roleId: External.dir().optional(),
  resourceName: External.dir().optional(),
  resourceId: External.dir().optional(),
  operationName: External.dir().optional(),
  permissionId: External.dir().optional(),
});
export const RolePermissionsOwnWhere = z.object({
  id: External.IntegerFilter.optional(),
  createdAt: External.DateTimeFilter.optional(),
  appName: External.StringFilter.optional(),
  appId: External.IntegerFilter.optional(),
  roleName: External.StringFilter.optional(),
  roleId: External.IntegerFilter.optional(),
  resourceName: External.StringFilter.optional(),
  resourceId: External.IntegerFilter.optional(),
  operationName: External.StringFilter.optional(),
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
  appId: External.bool().optional(),
  resourceId: External.bool().optional(),
  appName: External.bool().optional(),
  resourceName: External.bool().optional(),
  operationName: External.bool().optional(),
});
export const PermissionOwnOrder = z.object({
  id: External.dir().optional(),
  createdAt: External.dir().optional(),
  appId: External.dir().optional(),
  resourceId: External.dir().optional(),
  appName: External.dir().optional(),
  resourceName: External.dir().optional(),
  operationName: External.dir().optional(),
});
export const PermissionOwnWhere = z.object({
  id: External.IntegerFilter.optional(),
  createdAt: External.DateTimeFilter.optional(),
  appId: External.IntegerFilter.optional(),
  resourceId: External.IntegerFilter.optional(),
  appName: External.StringFilter.optional(),
  resourceName: External.StringFilter.optional(),
  operationName: External.StringFilter.optional(),
});
export const PermissionOwnCreate = z.object({ operationName: External.str() });
export const PermissionOwnUpdate = z.object({
  operationName: External.str().optional(),
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
export const UserPermissionOwnProjection = z.object({
  id: External.bool().optional(),
  createdAt: External.bool().optional(),
  updatedAt: External.bool().optional(),
  deletedAt: External.bool().optional(),
  userId: External.bool().optional(),
  permissionId: External.bool().optional(),
});
export const UserPermissionOwnOrder = z.object({
  id: External.dir().optional(),
  createdAt: External.dir().optional(),
  updatedAt: External.dir().optional(),
  deletedAt: External.dir().optional(),
  userId: External.dir().optional(),
  permissionId: External.dir().optional(),
});
export const UserPermissionOwnWhere = z.object({
  id: External.IntegerFilter.optional(),
  createdAt: External.DateTimeFilter.optional(),
  updatedAt: External.DateTimeFilter.optional(),
  deletedAt: External.DateTimeFilter.optional(),
  userId: External.IntegerFilter.optional(),
  permissionId: External.IntegerFilter.optional(),
});
export const UserPermissionOwnCreate = z.object({});
export const UserPermissionOwnUpdate = z.object({});
export const UserPermissionRelationProjection = z.union([
  External.bool(),
  z.object({
    select: UserPermissionOwnProjection.optional(),
    where: UserPermissionOwnWhere.optional(),
  }),
]);
export const UserPermissionRelationManyProjection = z.union([
  External.bool(),
  z.object({
    select: UserPermissionOwnProjection.optional(),
    where: UserPermissionOwnWhere.optional(),
    orderBy: UserPermissionOwnOrder.optional(),
    take: External.int().min(0).optional(),
    skip: External.int().min(0).optional(),
  }),
]);
export const UserPermissionRelationManyWhere = z.union([
  z.object({ some: UserPermissionOwnWhere }),
  z.object({ every: UserPermissionOwnWhere }),
  z.object({ none: UserPermissionOwnWhere }),
]);
export const UserPermissionRelationCreate = z.union([
  External.connect(),
  z.object({
    create: UserPermissionOwnCreate,
  }),
]);
export const UserPermissionRelationManyCreate = z.union([
  External.connectMany(),
  z.object({
    createMany: z.object({
      data: UserPermissionOwnCreate.array(),
    }),
  }),
]);
export const SessionOwnProjection = z.object({
  id: External.bool().optional(),
  createdAt: External.bool().optional(),
  username: External.bool().optional(),
  token: External.bool().optional(),
  version: External.bool().optional(),
  deviceId: External.bool().optional(),
  deviceType: External.bool().optional(),
  longitude: External.bool().optional(),
  latitude: External.bool().optional(),
});
export const SessionOwnOrder = z.object({
  id: External.dir().optional(),
  createdAt: External.dir().optional(),
  username: External.dir().optional(),
  token: External.dir().optional(),
  version: External.dir().optional(),
  deviceId: External.dir().optional(),
  deviceType: External.dir().optional(),
  longitude: External.dir().optional(),
  latitude: External.dir().optional(),
});
export const SessionOwnWhere = z.object({
  id: External.IntegerFilter.optional(),
  createdAt: External.DateTimeFilter.optional(),
  username: External.StringFilter.optional(),
  token: External.StringFilter.optional(),
  version: External.IntegerFilter.optional(),
  deviceId: External.StringFilter.optional(),
  deviceType: External.StringFilter.optional(),
  longitude: External.StringFilter.optional(),
  latitude: External.StringFilter.optional(),
});
export const SessionOwnCreate = z.object({
  token: External.str(),
  version: External.int().optional(),
  deviceId: External.str().optional(),
  deviceType: External.str().optional(),
  longitude: External.str().optional(),
  latitude: External.str().optional(),
});
export const SessionOwnUpdate = z.object({
  token: External.str().optional(),
  version: External.int().optional(),
  deviceId: External.str().optional(),
  deviceType: External.str().optional(),
  longitude: External.str().optional(),
  latitude: External.str().optional(),
});
export const SessionRelationProjection = z.union([
  External.bool(),
  z.object({
    select: SessionOwnProjection.optional(),
    where: SessionOwnWhere.optional(),
  }),
]);
export const SessionRelationManyProjection = z.union([
  External.bool(),
  z.object({
    select: SessionOwnProjection.optional(),
    where: SessionOwnWhere.optional(),
    orderBy: SessionOwnOrder.optional(),
    take: External.int().min(0).optional(),
    skip: External.int().min(0).optional(),
  }),
]);
export const SessionRelationManyWhere = z.union([
  z.object({ some: SessionOwnWhere }),
  z.object({ every: SessionOwnWhere }),
  z.object({ none: SessionOwnWhere }),
]);
export const SessionRelationCreate = z.union([
  External.connect(),
  z.object({
    create: SessionOwnCreate,
  }),
]);
export const SessionRelationManyCreate = z.union([
  External.connectMany(),
  z.object({
    createMany: z.object({
      data: SessionOwnCreate.array(),
    }),
  }),
]);
export const SessionPermissionOwnProjection = z.object({
  id: External.bool().optional(),
  createdAt: External.bool().optional(),
  sessionId: External.bool().optional(),
  permissionId: External.bool().optional(),
  appName: External.bool().optional(),
  operationName: External.bool().optional(),
  resourceName: External.bool().optional(),
});
export const SessionPermissionOwnOrder = z.object({
  id: External.dir().optional(),
  createdAt: External.dir().optional(),
  sessionId: External.dir().optional(),
  permissionId: External.dir().optional(),
  appName: External.dir().optional(),
  operationName: External.dir().optional(),
  resourceName: External.dir().optional(),
});
export const SessionPermissionOwnWhere = z.object({
  id: External.IntegerFilter.optional(),
  createdAt: External.DateTimeFilter.optional(),
  sessionId: External.IntegerFilter.optional(),
  permissionId: External.IntegerFilter.optional(),
  appName: External.StringFilter.optional(),
  operationName: External.StringFilter.optional(),
  resourceName: External.StringFilter.optional(),
});
export const SessionPermissionOwnCreate = z.object({});
export const SessionPermissionOwnUpdate = z.object({});
export const SessionPermissionRelationProjection = z.union([
  External.bool(),
  z.object({
    select: SessionPermissionOwnProjection.optional(),
    where: SessionPermissionOwnWhere.optional(),
  }),
]);
export const SessionPermissionRelationManyProjection = z.union([
  External.bool(),
  z.object({
    select: SessionPermissionOwnProjection.optional(),
    where: SessionPermissionOwnWhere.optional(),
    orderBy: SessionPermissionOwnOrder.optional(),
    take: External.int().min(0).optional(),
    skip: External.int().min(0).optional(),
  }),
]);
export const SessionPermissionRelationManyWhere = z.union([
  z.object({ some: SessionPermissionOwnWhere }),
  z.object({ every: SessionPermissionOwnWhere }),
  z.object({ none: SessionPermissionOwnWhere }),
]);
export const SessionPermissionRelationCreate = z.union([
  External.connect(),
  z.object({
    create: SessionPermissionOwnCreate,
  }),
]);
export const SessionPermissionRelationManyCreate = z.union([
  External.connectMany(),
  z.object({
    createMany: z.object({
      data: SessionPermissionOwnCreate.array(),
    }),
  }),
]);
