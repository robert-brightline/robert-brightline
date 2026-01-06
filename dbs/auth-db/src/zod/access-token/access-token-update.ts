
       
        import { z } from 'zod';
        import * as External from '@robert-brightline/zod';
        import * as Internal from '../internals.js';
        

export const AccessTokenUpdate = z.object({ uuid: External.str().optional(), name: External.str().optional(), token: External.str().optional(), accessTokenPermissions: Internal.AccessTokenPermissionsRelationManyCreate.optional() })
      