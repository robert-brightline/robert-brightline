
       
        import { z } from 'zod';
        import * as External from '@robert-brightline/zod';
        import * as Internal from '../internals.js';
        

export const PermissionProjection = z.object({ id: External.bool().optional(), createdAt: External.bool().optional(), updatedAt: External.bool().optional(), deletedAt: External.bool().optional(), operation: External.bool().optional(), app: Internal.AppRelationProjection, appId: External.bool().optional(), resource: Internal.ResourceRelationProjection, resourceId: External.bool().optional(), rolePermissions: Internal.RolePermissionsRelationManyProjection, accessTokenPermissions: Internal.AccessTokenPermissionsRelationManyProjection })
      