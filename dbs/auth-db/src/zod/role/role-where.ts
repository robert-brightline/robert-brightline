import * as External from '@robert-brightline/zod';
import { z } from 'zod';
import * as Internal from '../internals.js';

export const RoleWhere = z.object({
  id: External.IntegerFilter.optional(),
  createdAt: External.DateTimeFilter.optional(),
  updatedAt: External.DateTimeFilter.optional(),
  deletedAt: External.DateTimeFilter.optional(),
  name: External.StringFilter.optional(),
  rolePermissions: Internal.RolePermissionsRelationManyWhere.optional(),
  userRoles: Internal.UserRoleRelationManyWhere.optional(),
});
