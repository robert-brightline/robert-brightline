import { z } from 'zod';
import * as Internal from '../internals.js';
import * as External from '@robert-brightline/zod';
export const PermissionWhere = z.object({
  id: External.IntegerFilter.optional(),
  createdAt: External.DateTimeFilter.optional(),
  appId: External.IntegerFilter.optional(),
  resourceId: External.IntegerFilter.optional(),
  appName: External.StringFilter.optional(),
  resourceName: External.StringFilter.optional(),
  operationName: External.StringFilter.optional(),
  app: Internal.AppOwnWhere.optional(),
  resource: Internal.ResourceOwnWhere.optional(),
  rolePermissions: Internal.RolePermissionsRelationManyWhere.optional(),
  accessTokenPermissions:
    Internal.SessionPermissionRelationManyWhere.optional(),
  userPermissions: Internal.UserPermissionRelationManyWhere.optional(),
});
