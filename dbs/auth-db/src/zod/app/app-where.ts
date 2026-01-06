
       
        import { z } from 'zod';
        import * as External from '@robert-brightline/zod';
        import * as Internal from '../internals.js';
        

export const AppWhere = z.object({ id: External.IntegerFilter.optional(), createdAt: External.DateTimeFilter.optional(), updatedAt: External.DateTimeFilter.optional(), deletedAt: External.DateTimeFilter.optional(), name: External.StringFilter.optional(), permissions: Internal.PermissionRelationManyWhere.optional() })
      