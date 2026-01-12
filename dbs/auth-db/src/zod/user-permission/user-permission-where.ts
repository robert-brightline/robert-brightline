import { z } from 'zod';
import * as Internal from '../internals.js';
import * as External from '@robert-brightline/zod';
export const UserPermissionWhere = z.object({
  id: External.IntegerFilter.optional(),
  createdAt: External.DateTimeFilter.optional(),
  updatedAt: External.DateTimeFilter.optional(),
  deletedAt: External.DateTimeFilter.optional(),
  user: Internal.UserOwnWhere.optional(),
  userId: External.IntegerFilter.optional(),
  permission: Internal.PermissionOwnWhere.optional(),
  permissionId: External.IntegerFilter.optional(),
});
