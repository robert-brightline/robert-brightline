
       
        import { z } from 'zod';
        import * as External from '@robert-brightline/zod';
        import * as Internal from '../internals.js';
        

export const AccessTokenCreate = z.object({ uuid: External.str(), name: External.str(), token: External.str(), accessTokenPermissions: Internal.AccessTokenPermissionsRelationManyCreate.optional() })
      