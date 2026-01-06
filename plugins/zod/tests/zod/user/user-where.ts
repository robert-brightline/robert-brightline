
       
        import { z } from 'zod';
        import * as External from '@robert-brightline/zod';
        import * as Internal from '../internals.js';
        import * as Enums from '../enums.js';
  

      export const UserWhere = z.object({ id: External.IntegerFilter.optional(), uuid: External.StringFilter.optional(), createdAt: External.DateTimeFilter.optional(), updatedAt: External.DateTimeFilter.optional(), deletedAt: External.DateTimeFilter.optional(), username: External.StringFilter.optional(), password: External.StringFilter.optional(), updatedProducts: Internal.ProductRelationManyWhere.optional(), createdProducts: Internal.ProductRelationManyWhere.optional() })
      