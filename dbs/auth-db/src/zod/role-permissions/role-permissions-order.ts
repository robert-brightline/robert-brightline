import { z } from 'zod';
import * as Internal from '../internals.js';
import * as External from '@robert-brightline/zod';
export const RolePermissionsOrder = z.object({
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
  role: Internal.RoleOwnOrder.optional(),
  permission: Internal.PermissionOwnOrder.optional(),
});
