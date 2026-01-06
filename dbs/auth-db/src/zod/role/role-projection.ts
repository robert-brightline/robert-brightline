import { z } from 'zod';
import * as Internal from '../internals.js';
import * as External from '@robert-brightline/zod';
export const RoleProjection = z.object({
  id: External.bool().optional(),
  createdAt: External.bool().optional(),
  updatedAt: External.bool().optional(),
  deletedAt: External.bool().optional(),
  name: External.bool().optional(),
  rolePermissions: Internal.RolePermissionsRelationManyProjection,
  userRoles: Internal.UserRoleRelationManyProjection,
});
