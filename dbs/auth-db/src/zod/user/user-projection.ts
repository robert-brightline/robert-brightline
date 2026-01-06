import * as External from '@robert-brightline/zod';
import { z } from 'zod';
import * as Internal from '../internals.js';

export const UserProjection = z.object({
  id: External.bool().optional(),
  uuid: External.bool().optional(),
  createdAt: External.bool().optional(),
  updatedAt: External.bool().optional(),
  deletedAt: External.bool().optional(),
  username: External.bool().optional(),
  password: External.bool().optional(),
  userRoles: Internal.UserRoleRelationManyProjection,
});
