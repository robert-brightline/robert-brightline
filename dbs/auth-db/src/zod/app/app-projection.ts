import { z } from 'zod';
import * as Internal from '../internals.js';
import * as External from '@robert-brightline/zod';
export const AppProjection = z.object({
  id: External.bool().optional(),
  uuid: External.bool().optional(),
  createdAt: External.bool().optional(),
  updatedAt: External.bool().optional(),
  deletedAt: External.bool().optional(),
  name: External.bool().optional(),
  permissions: Internal.PermissionRelationManyProjection,
});
