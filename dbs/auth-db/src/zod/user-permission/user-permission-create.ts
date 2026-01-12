import { z } from 'zod';
import * as Internal from '../internals.js';
export const UserPermissionCreate = z.object({
  user: Internal.UserRelationCreate,
  permission: Internal.PermissionRelationCreate,
});
