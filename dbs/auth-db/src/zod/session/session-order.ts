import { z } from 'zod';
import * as Internal from '../internals.js';
import * as External from '@robert-brightline/zod';
export const SessionOrder = z.object({
  id: External.dir().optional(),
  createdAt: External.dir().optional(),
  username: External.dir().optional(),
  token: External.dir().optional(),
  version: External.dir().optional(),
  deviceId: External.dir().optional(),
  deviceType: External.dir().optional(),
  longitude: External.dir().optional(),
  latitude: External.dir().optional(),
  user: Internal.UserOwnOrder.optional(),
  sessionPermissions: External.orderByCount().optional(),
});
