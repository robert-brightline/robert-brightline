import { z } from 'zod';
import * as Internal from '../internals.js';
import * as External from '@robert-brightline/zod';
export const AccessTokenUpdate = z.object({
  name: External.str().optional(),
  token: External.str().optional(),
  accessTokenPermissions:
    Internal.AccessTokenPermissionsRelationManyCreate.optional(),
});
