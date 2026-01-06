import { z } from 'zod';
import * as Internal from '../internals.js';
export const AccessTokenPermissionsCreate = z.object({
  accessToken: Internal.AccessTokenRelationCreate,
  permission: Internal.PermissionRelationCreate,
});
