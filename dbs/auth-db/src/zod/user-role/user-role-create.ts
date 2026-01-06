import { z } from 'zod';
import * as Internal from '../internals.js';
export const UserRoleCreate = z.object({
  user: Internal.UserRelationCreate,
  role: Internal.RoleRelationCreate,
});
