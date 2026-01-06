import { z } from 'zod';
import * as Internal from '../internals.js';
export const RolePermissionsCreate = z.object({
  role: Internal.RoleRelationCreate,
  permission: Internal.PermissionRelationCreate,
});
