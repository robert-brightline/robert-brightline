import { z } from 'zod';
import * as Internal from '../internals.js';
import * as External from '@robert-brightline/zod';
export const UserRoleWhere = z.object({
  id: External.IntegerFilter.optional(),
  uuid: External.StringFilter.optional(),
  createdAt: External.DateTimeFilter.optional(),
  updatedAt: External.DateTimeFilter.optional(),
  deletedAt: External.DateTimeFilter.optional(),
  user: Internal.UserOwnWhere.optional(),
  userId: External.IntegerFilter.optional(),
  role: Internal.RoleOwnWhere.optional(),
  roleId: External.IntegerFilter.optional(),
});
