
       
        import { z } from 'zod';
        import * as External from '@robert-brightline/zod';
        import * as Internal from '../internals.js';
        import * as Enums from '../enums.js';
  

      export const CategoryWhere = z.object({ id: External.IntegerFilter.optional(), createdAt: External.DateTimeFilter.optional(), updatedAt: External.DateTimeFilter.optional(), deletedAt: External.DateTimeFilter.optional(), name: External.StringFilter.optional(), parent: Internal.CategoryOwnWhere.optional(), parentId: External.IntegerFilter.optional(), children: Internal.CategoryRelationManyWhere.optional(), products: Internal.ProductRelationManyWhere.optional() })
      