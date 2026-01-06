
       
        import { z } from 'zod';
        import * as External from '@robert-brightline/zod';
        import * as Internal from '../internals.js';
        

export const AccessTokenPermissionsCreate = z.object({ uuid: External.str(), accessToken: Internal.AccessTokenRelationCreate, permission: Internal.PermissionRelationCreate })
      