import * as External from '@robert-brightline/zod';
import { z } from 'zod';
import * as Internal from '../internals.js';

export const UserRoleUpdate = z.object({
  uuid: External.str().optional(),
  user: Internal.UserRelationCreate.optional(),
  role: Internal.RoleRelationCreate.optional(),
});
