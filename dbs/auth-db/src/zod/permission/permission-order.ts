import { z } from 'zod';
import * as Internal from '../internals.js';
import * as External from '@robert-brightline/zod';
export const PermissionOrder = z.object({
  id: External.dir().optional(),
  createdAt: External.dir().optional(),
  appId: External.dir().optional(),
  resourceId: External.dir().optional(),
  appName: External.dir().optional(),
  resourceName: External.dir().optional(),
  operationName: External.dir().optional(),
  app: Internal.AppOwnOrder.optional(),
  resource: Internal.ResourceOwnOrder.optional(),
  rolePermissions: External.orderByCount().optional(),
  accessTokenPermissions: External.orderByCount().optional(),
  userPermissions: External.orderByCount().optional(),
});
