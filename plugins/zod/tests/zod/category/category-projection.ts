
       
        import { z } from 'zod';
        import * as External from '@robert-brightline/zod';
        import * as Internal from '../internals.js';
        import * as Enums from '../enums.js';
  

      export const CategoryProjection = z.object({ id: External.bool().optional(), createdAt: External.bool().optional(), updatedAt: External.bool().optional(), deletedAt: External.bool().optional(), name: External.bool().optional(), parent: CategoryRelationProjection, parentId: External.bool().optional(), children: CategoryRelationManyProjection, products: ProductRelationManyProjection })
      