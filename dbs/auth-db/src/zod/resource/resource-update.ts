import { z } from 'zod';
import * as Internal from '../internals.js';
import * as External from '@robert-brightline/zod';
export const ResourceUpdate = z.object({
  name: External.str().optional(),
  permissions: Internal.PermissionRelationManyCreate.optional(),
});
