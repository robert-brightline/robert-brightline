
       
        import { z } from 'zod';
        import * as External from '@robert-brightline/zod';
        import * as Internal from '../internals.js';
        import * as Enums from '../enums.js';
  

      export const CategoryUpdate = z.object({ name: External.str().optional(), parent: Internal.CategoryRelationCreate.optional(), children: Internal.CategoryRelationManyCreate.optional(), products: Internal.ProductRelationManyCreate.optional() })
      