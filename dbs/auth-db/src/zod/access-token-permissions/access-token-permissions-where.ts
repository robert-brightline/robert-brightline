import { z } from 'zod';
import * as Internal from '../internals.js';
import * as External from '@robert-brightline/zod';
export const AccessTokenPermissionsWhere = z.object({
  id: External.IntegerFilter.optional(),
  uuid: External.StringFilter.optional(),
  createdAt: External.DateTimeFilter.optional(),
  updatedAt: External.DateTimeFilter.optional(),
  deletedAt: External.DateTimeFilter.optional(),
  accessToken: Internal.AccessTokenOwnWhere.optional(),
  accessTokenId: External.IntegerFilter.optional(),
  permission: Internal.PermissionOwnWhere.optional(),
  permissionId: External.IntegerFilter.optional(),
});
