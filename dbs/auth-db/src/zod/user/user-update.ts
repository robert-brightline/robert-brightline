import { z } from 'zod';
import * as Internal from '../internals.js';
import * as External from '@robert-brightline/zod';
export const UserUpdate = z.object({
  username: External.email().optional(),
  password: External.password().optional(),
  userPermissions: Internal.UserPermissionRelationManyCreate.optional(),
  sessions: Internal.SessionRelationManyCreate.optional(),
});
