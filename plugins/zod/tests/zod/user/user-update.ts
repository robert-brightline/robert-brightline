
       
        import { z } from 'zod';
        import * as External from '@robert-brightline/zod';
        import * as Internal from '../internals.js';
        import * as Enums from '../enums.js';
  

      export const UserUpdate = z.object({ uuid: External.str().optional(), username: External.str().optional(), password: External.str().optional(), updatedProducts: Internal.ProductRelationManyCreate.optional(), createdProducts: Internal.ProductRelationManyCreate.optional() })
      