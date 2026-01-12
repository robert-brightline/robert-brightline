import { z } from 'zod';
import * as Internal from '../internals.js';
import * as External from '@robert-brightline/zod';
export const SessionPermissionOrder = z.object({
  id: External.dir().optional(),
  createdAt: External.dir().optional(),
  session: Internal.SessionOwnOrder.optional(),
  sessionId: External.dir().optional(),
  permission: Internal.PermissionOwnOrder.optional(),
  permissionId: External.dir().optional(),
  appName: External.dir().optional(),
  operationName: External.dir().optional(),
  resourceName: External.dir().optional(),
});
