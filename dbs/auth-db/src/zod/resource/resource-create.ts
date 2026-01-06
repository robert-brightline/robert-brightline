import { z } from 'zod';
import * as Internal from '../internals.js';
import * as External from '@robert-brightline/zod';
export const ResourceCreate = z.object({
  name: External.str(),
  permissions: Internal.PermissionRelationManyCreate.optional(),
});
