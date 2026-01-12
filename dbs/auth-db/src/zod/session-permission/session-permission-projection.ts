import { z } from 'zod';
import * as Internal from '../internals.js';
import * as External from '@robert-brightline/zod';
export const SessionPermissionProjection = z.object({
  id: External.bool().optional(),
  createdAt: External.bool().optional(),
  session: Internal.SessionRelationProjection,
  sessionId: External.bool().optional(),
  permission: Internal.PermissionRelationProjection,
  permissionId: External.bool().optional(),
  appName: External.bool().optional(),
  operationName: External.bool().optional(),
  resourceName: External.bool().optional(),
});
