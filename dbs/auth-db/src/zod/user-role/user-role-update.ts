import { z } from 'zod';
import * as Internal from '../internals.js';
export const UserRoleUpdate = z.object({
  user: Internal.UserRelationCreate.optional(),
  role: Internal.RoleRelationCreate.optional(),
});
