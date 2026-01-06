import * as External from '@robert-brightline/zod';
import { z } from 'zod';
import * as Internal from '../internals.js';

export const UserCreate = z.object({
  uuid: External.str(),
  username: External.str(),
  password: External.str(),
  userRoles: Internal.UserRoleRelationManyCreate.optional(),
});
