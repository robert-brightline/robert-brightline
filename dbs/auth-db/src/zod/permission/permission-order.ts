
       
        import { z } from 'zod';
        import * as External from '@robert-brightline/zod';
        import * as Internal from '../internals.js';
        

export const PermissionOrder = z.object({ id: External.dir().optional(), createdAt: External.dir().optional(), updatedAt: External.dir().optional(), deletedAt: External.dir().optional(), operation: External.dir().optional(), app: Internal.AppOwnOrder.optional(), appId: External.dir().optional(), resource: Internal.ResourceOwnOrder.optional(), resourceId: External.dir().optional(), rolePermissions: External.orderByCount().optional(), accessTokenPermissions: External.orderByCount().optional() })
      