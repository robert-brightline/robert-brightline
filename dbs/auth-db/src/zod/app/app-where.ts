import { z } from 'zod';
import * as Internal from '../internals.js';
import * as External from '@robert-brightline/zod';
export const AppWhere = z.object({
  id: External.IntegerFilter.optional(),
  uuid: External.StringFilter.optional(),
  createdAt: External.DateTimeFilter.optional(),
  updatedAt: External.DateTimeFilter.optional(),
  deletedAt: External.DateTimeFilter.optional(),
  name: External.StringFilter.optional(),
  version: External.StringFilter.optional(),
  description: External.StringFilter.optional(),
  permissions: Internal.PermissionRelationManyWhere.optional(),
  resources: Internal.ResourceRelationManyWhere.optional(),
});
