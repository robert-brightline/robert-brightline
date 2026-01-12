import { z } from 'zod';
import * as Internal from '../internals.js';
import * as External from '@robert-brightline/zod';
export const AppCreate = z.object({
  name: External.name(),
  version: External.str().optional(),
  description: External.desc().optional(),
  permissions: Internal.PermissionRelationManyCreate.optional(),
  resources: Internal.ResourceRelationManyCreate.optional(),
});
