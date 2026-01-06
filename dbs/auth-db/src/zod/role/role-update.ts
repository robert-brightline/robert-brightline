import * as External from '@robert-brightline/zod';
import { z } from 'zod';
import * as Internal from '../internals.js';

export const RoleUpdate = z.object({
  name: External.str().optional(),
  rolePermissions: Internal.RolePermissionsRelationManyCreate.optional(),
  userRoles: Internal.UserRoleRelationManyCreate.optional(),
});
