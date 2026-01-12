import { z } from 'zod';
import * as Internal from '../internals.js';
import * as External from '@robert-brightline/zod';
export const AppUpdate = z.object({
  name: External.name().optional(),
  version: External.str().optional(),
  description: External.desc().optional(),
  permissions: Internal.PermissionRelationManyCreate.optional(),
  resources: Internal.ResourceRelationManyCreate.optional(),
});
