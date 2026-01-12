import { z } from 'zod';
import * as Internal from '../internals.js';
import * as External from '@robert-brightline/zod';
export const SessionProjection = z.object({
  id: External.bool().optional(),
  createdAt: External.bool().optional(),
  username: External.bool().optional(),
  token: External.bool().optional(),
  version: External.bool().optional(),
  deviceId: External.bool().optional(),
  deviceType: External.bool().optional(),
  longitude: External.bool().optional(),
  latitude: External.bool().optional(),
  user: Internal.UserRelationProjection,
  sessionPermissions: Internal.SessionPermissionRelationManyProjection,
});
