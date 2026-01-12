import { z } from 'zod';
import * as Internal from '../internals.js';
import * as External from '@robert-brightline/zod';
export const ResourceWhere = z.object({
  id: External.IntegerFilter.optional(),
  createdAt: External.DateTimeFilter.optional(),
  name: External.StringFilter.optional(),
  appName: External.StringFilter.optional(),
  appId: External.IntegerFilter.optional(),
  app: Internal.AppOwnWhere.optional(),
  permissions: Internal.PermissionRelationManyWhere.optional(),
});
