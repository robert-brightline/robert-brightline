import { z } from 'zod';
import * as Internal from '../internals.js';
import * as External from '@robert-brightline/zod';
export const RoleCreate = z.object({
  name: External.name(),
  rolePermissions: Internal.RolePermissionsRelationManyCreate.optional(),
});
