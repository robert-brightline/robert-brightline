import * as External from '@robert-brightline/zod';
import { z } from 'zod';
import * as Internal from '../internals.js';

export const UserUpdate = z.object({
  uuid: External.str().optional(),
  username: External.str().optional(),
  password: External.str().optional(),
  userRoles: Internal.UserRoleRelationManyCreate.optional(),
});
