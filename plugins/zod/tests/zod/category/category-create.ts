
       
        import { z } from 'zod';
        import * as External from '@robert-brightline/zod';
        import * as Internal from '../internals.js';
        import * as Enums from '../enums.js';
  
      
      export const CategoryCreate = z.object({ name: External.str(), parent: Internal.CategoryRelationCreate.optional(), children: Internal.CategoryRelationManyCreate.optional(), products: Internal.ProductRelationManyCreate.optional() })
      