import { z } from 'zod';
import * as Internal from '../internals.js';
import * as External from '@robert-brightline/zod';
import * as Enums from '../enums.js';
export const PermissionWhere = z.object({
  id: External.IntegerFilter.optional(),
  createdAt: External.DateTimeFilter.optional(),
  updatedAt: External.DateTimeFilter.optional(),
  deletedAt: External.DateTimeFilter.optional(),
  operation: Enums.OperationEnumFilter.optional(),
  app: Internal.AppOwnWhere.optional(),
  appId: External.IntegerFilter.optional(),
  resource: Internal.ResourceOwnWhere.optional(),
  resourceId: External.IntegerFilter.optional(),
  rolePermissions: Internal.RolePermissionsRelationManyWhere.optional(),
  accessTokenPermissions:
    Internal.AccessTokenPermissionsRelationManyWhere.optional(),
});
