import * as External from '@robert-brightline/zod';
import { z } from 'zod';
import * as Internal from '../internals.js';

export const UserWhere = z.object({
  id: External.IntegerFilter.optional(),
  uuid: External.StringFilter.optional(),
  createdAt: External.DateTimeFilter.optional(),
  updatedAt: External.DateTimeFilter.optional(),
  deletedAt: External.DateTimeFilter.optional(),
  username: External.StringFilter.optional(),
  password: External.StringFilter.optional(),
  userRoles: Internal.UserRoleRelationManyWhere.optional(),
});
