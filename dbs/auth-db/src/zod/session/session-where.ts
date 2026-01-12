import { z } from 'zod';
import * as Internal from '../internals.js';
import * as External from '@robert-brightline/zod';
export const SessionWhere = z.object({
  id: External.IntegerFilter.optional(),
  createdAt: External.DateTimeFilter.optional(),
  username: External.StringFilter.optional(),
  token: External.StringFilter.optional(),
  version: External.IntegerFilter.optional(),
  deviceId: External.StringFilter.optional(),
  deviceType: External.StringFilter.optional(),
  longitude: External.StringFilter.optional(),
  latitude: External.StringFilter.optional(),
  user: Internal.UserOwnWhere.optional(),
  sessionPermissions: Internal.SessionPermissionRelationManyWhere.optional(),
});
