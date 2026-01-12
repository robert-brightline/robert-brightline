import { z } from 'zod';
import * as Internal from '../internals.js';
import * as External from '@robert-brightline/zod';
export const PermissionProjection = z.object({
  id: External.bool().optional(),
  createdAt: External.bool().optional(),
  appId: External.bool().optional(),
  resourceId: External.bool().optional(),
  appName: External.bool().optional(),
  resourceName: External.bool().optional(),
  operationName: External.bool().optional(),
  app: Internal.AppRelationProjection,
  resource: Internal.ResourceRelationProjection,
  rolePermissions: Internal.RolePermissionsRelationManyProjection,
  accessTokenPermissions: Internal.SessionPermissionRelationManyProjection,
  userPermissions: Internal.UserPermissionRelationManyProjection,
});
