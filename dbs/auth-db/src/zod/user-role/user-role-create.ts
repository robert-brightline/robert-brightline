import * as External from '@robert-brightline/zod';
import { z } from 'zod';
import * as Internal from '../internals.js';

export const UserRoleCreate = z.object({
  uuid: External.str(),
  user: Internal.UserRelationCreate,
  role: Internal.RoleRelationCreate,
});
