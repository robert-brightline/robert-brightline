import { z } from 'zod';
import * as Internal from '../internals.js';
import * as External from '@robert-brightline/zod';
export const UserCreate = z.object({
  username: External.email(),
  password: External.password(),
  userRoles: Internal.UserRoleRelationManyCreate.optional(),
});
