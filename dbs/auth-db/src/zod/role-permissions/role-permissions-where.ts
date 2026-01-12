import { z } from 'zod';
import * as Internal from '../internals.js';
import * as External from '@robert-brightline/zod';
export const RolePermissionsWhere = z.object({
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
  role: Internal.RoleOwnWhere.optional(),
  permission: Internal.PermissionOwnWhere.optional(),
});
