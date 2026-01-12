import { z } from 'zod';
import * as Internal from '../internals.js';
import * as External from '@robert-brightline/zod';
export const UserPermissionProjection = z.object({
  id: External.bool().optional(),
  createdAt: External.bool().optional(),
  updatedAt: External.bool().optional(),
  deletedAt: External.bool().optional(),
  user: Internal.UserRelationProjection,
  userId: External.bool().optional(),
  permission: Internal.PermissionRelationProjection,
  permissionId: External.bool().optional(),
});
