import { z } from 'zod';
import * as Internal from '../internals.js';
import * as Enums from '../enums.js';
export const PermissionUpdate = z.object({
  operation: Enums.OperationEnum.optional(),
  app: Internal.AppRelationCreate.optional(),
  resource: Internal.ResourceRelationCreate.optional(),
  rolePermissions: Internal.RolePermissionsRelationManyCreate.optional(),
  accessTokenPermissions:
    Internal.AccessTokenPermissionsRelationManyCreate.optional(),
});
