import { z } from 'zod';
import * as Internal from '../internals.js';
export const AccessTokenPermissionsUpdate = z.object({
  accessToken: Internal.AccessTokenRelationCreate.optional(),
  permission: Internal.PermissionRelationCreate.optional(),
});
