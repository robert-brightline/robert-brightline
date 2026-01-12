import { z } from 'zod';
import * as Internal from '../internals.js';
import * as External from '@robert-brightline/zod';
export const ResourceProjection = z.object({
  id: External.bool().optional(),
  createdAt: External.bool().optional(),
  name: External.bool().optional(),
  appName: External.bool().optional(),
  appId: External.bool().optional(),
  app: Internal.AppRelationProjection,
  permissions: Internal.PermissionRelationManyProjection,
});
