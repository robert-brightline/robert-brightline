import { z } from 'zod';
import * as Internal from '../internals.js';
import * as External from '@robert-brightline/zod';
export const PermissionUpdate = z.object({
  operationName: External.str().optional(),
  app: Internal.AppRelationCreate.optional(),
  resource: Internal.ResourceRelationCreate.optional(),
  rolePermissions: Internal.RolePermissionsRelationManyCreate.optional(),
  accessTokenPermissions:
    Internal.SessionPermissionRelationManyCreate.optional(),
  userPermissions: Internal.UserPermissionRelationManyCreate.optional(),
});
