import { z } from 'zod';
import * as Internal from '../internals.js';
import * as External from '@robert-brightline/zod';
export const RolePermissionsProjection = z.object({
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
  role: Internal.RoleRelationProjection,
  permission: Internal.PermissionRelationProjection,
});
