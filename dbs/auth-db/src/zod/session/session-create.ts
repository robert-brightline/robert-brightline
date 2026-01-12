import { z } from 'zod';
import * as Internal from '../internals.js';
import * as External from '@robert-brightline/zod';
export const SessionCreate = z.object({
  token: External.str(),
  version: External.int().optional(),
  deviceId: External.str().optional(),
  deviceType: External.str().optional(),
  longitude: External.str().optional(),
  latitude: External.str().optional(),
  user: Internal.UserRelationCreate,
  sessionPermissions: Internal.SessionPermissionRelationManyCreate.optional(),
});
