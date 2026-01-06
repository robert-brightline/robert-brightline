import { z } from 'zod';
import * as Internal from '../internals.js';
import * as External from '@robert-brightline/zod';
export const RoleUpdate = z.object({
  name: External.name().optional(),
  rolePermissions: Internal.RolePermissionsRelationManyCreate.optional(),
  userRoles: Internal.UserRoleRelationManyCreate.optional(),
});
