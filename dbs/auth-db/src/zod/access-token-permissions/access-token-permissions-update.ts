
       
        import { z } from 'zod';
        import * as External from '@robert-brightline/zod';
        import * as Internal from '../internals.js';
        

export const AccessTokenPermissionsUpdate = z.object({ uuid: External.str().optional(), accessToken: Internal.AccessTokenRelationCreate.optional(), permission: Internal.PermissionRelationCreate.optional() })
      