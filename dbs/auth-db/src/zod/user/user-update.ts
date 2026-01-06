import { z } from 'zod';
import * as Internal from '../internals.js';
import * as External from '@robert-brightline/zod';
export const UserUpdate = z.object({
  username: External.str().optional(),
  password: External.str().optional(),
  userRoles: Internal.UserRoleRelationManyCreate.optional(),
});
