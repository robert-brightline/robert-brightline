
       
        import { z } from 'zod';
        import * as External from '@robert-brightline/zod';
        import * as Internal from '../internals.js';
        

export const AccessTokenPermissionsOrder = z.object({ id: External.dir().optional(), uuid: External.dir().optional(), createdAt: External.dir().optional(), updatedAt: External.dir().optional(), deletedAt: External.dir().optional(), accessToken: Internal.AccessTokenOwnOrder.optional(), accessTokenId: External.dir().optional(), permission: Internal.PermissionOwnOrder.optional(), permissionId: External.dir().optional() })
      