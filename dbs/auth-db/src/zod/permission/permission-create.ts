import { z } from 'zod';
import * as Internal from '../internals.js';
import * as External from '@robert-brightline/zod';
export const PermissionCreate = z.object({
  operationName: External.str(),
  app: Internal.AppRelationCreate,
  resource: Internal.ResourceRelationCreate,
  rolePermissions: Internal.RolePermissionsRelationManyCreate.optional(),
  accessTokenPermissions:
    Internal.SessionPermissionRelationManyCreate.optional(),
  userPermissions: Internal.UserPermissionRelationManyCreate.optional(),
});
