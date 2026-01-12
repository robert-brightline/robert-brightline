import { z } from 'zod';
import * as Internal from '../internals.js';
import * as External from '@robert-brightline/zod';
export const SessionUpdate = z.object({
  token: External.str().optional(),
  version: External.int().optional(),
  deviceId: External.str().optional(),
  deviceType: External.str().optional(),
  longitude: External.str().optional(),
  latitude: External.str().optional(),
  user: Internal.UserRelationCreate.optional(),
  sessionPermissions: Internal.SessionPermissionRelationManyCreate.optional(),
});
