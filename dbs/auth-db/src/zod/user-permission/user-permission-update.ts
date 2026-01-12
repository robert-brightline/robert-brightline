import { z } from 'zod';
import * as Internal from '../internals.js';
export const UserPermissionUpdate = z.object({
  user: Internal.UserRelationCreate.optional(),
  permission: Internal.PermissionRelationCreate.optional(),
});
