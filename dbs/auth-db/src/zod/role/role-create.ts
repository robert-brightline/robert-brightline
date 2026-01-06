import * as External from '@robert-brightline/zod';
import { z } from 'zod';
import * as Internal from '../internals.js';

export const RoleCreate = z.object({
  name: External.str(),
  rolePermissions: Internal.RolePermissionsRelationManyCreate.optional(),
  userRoles: Internal.UserRoleRelationManyCreate.optional(),
});
