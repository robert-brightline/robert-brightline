
       
        import { z } from 'zod';
        import * as External from '@robert-brightline/zod';
        import * as Internal from '../internals.js';
        

export const ResourceProjection = z.object({ id: External.bool().optional(), createdAt: External.bool().optional(), updatedAt: External.bool().optional(), deletedAt: External.bool().optional(), name: External.bool().optional(), permissions: Internal.PermissionRelationManyProjection })
      