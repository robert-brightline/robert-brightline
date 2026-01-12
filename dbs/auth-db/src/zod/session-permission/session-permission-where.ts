import { z } from 'zod';
import * as Internal from '../internals.js';
import * as External from '@robert-brightline/zod';
export const SessionPermissionWhere = z.object({
  id: External.IntegerFilter.optional(),
  createdAt: External.DateTimeFilter.optional(),
  session: Internal.SessionOwnWhere.optional(),
  sessionId: External.IntegerFilter.optional(),
  permission: Internal.PermissionOwnWhere.optional(),
  permissionId: External.IntegerFilter.optional(),
  appName: External.StringFilter.optional(),
  operationName: External.StringFilter.optional(),
  resourceName: External.StringFilter.optional(),
});
