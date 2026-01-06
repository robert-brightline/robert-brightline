import { z } from 'zod';
import * as Internal from '../internals.js';
import * as External from '@robert-brightline/zod';
export const UserCreate = z.object({
  username: External.str(),
  password: External.str(),
  userRoles: Internal.UserRoleRelationManyCreate.optional(),
});
