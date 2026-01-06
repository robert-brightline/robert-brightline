
       
        import { z } from 'zod';
        import * as External from '@robert-brightline/zod';
        import * as Internal from '../internals.js';
        

export const AccessTokenPermissionsProjection = z.object({ id: External.bool().optional(), uuid: External.bool().optional(), createdAt: External.bool().optional(), updatedAt: External.bool().optional(), deletedAt: External.bool().optional(), accessToken: Internal.AccessTokenRelationProjection, accessTokenId: External.bool().optional(), permission: Internal.PermissionRelationProjection, permissionId: External.bool().optional() })
      