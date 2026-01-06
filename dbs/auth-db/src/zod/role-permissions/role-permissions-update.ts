import { z } from 'zod';
import * as Internal from '../internals.js';
export const RolePermissionsUpdate = z.object({
  role: Internal.RoleRelationCreate.optional(),
  permission: Internal.PermissionRelationCreate.optional(),
});
