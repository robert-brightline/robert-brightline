
       
        import { z } from 'zod';
        import * as External from '@robert-brightline/zod';
        import * as Internal from '../internals.js';
        

export const AccessTokenProjection = z.object({ id: External.bool().optional(), uuid: External.bool().optional(), createdAt: External.bool().optional(), updatedAt: External.bool().optional(), deletedAt: External.bool().optional(), name: External.bool().optional(), token: External.bool().optional(), accessTokenPermissions: Internal.AccessTokenPermissionsRelationManyProjection })
      