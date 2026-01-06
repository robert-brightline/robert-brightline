import { z } from 'zod';
import * as Internal from '../internals.js';
import * as External from '@robert-brightline/zod';
export const AccessTokenCreate = z.object({
  name: External.name(),
  token: External.str(),
  accessTokenPermissions:
    Internal.AccessTokenPermissionsRelationManyCreate.optional(),
});
