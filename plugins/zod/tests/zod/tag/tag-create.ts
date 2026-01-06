
       
        import { z } from 'zod';
        import * as External from '@robert-brightline/zod';
        import * as Internal from '../internals.js';
        import * as Enums from '../enums.js';
  
      
      export const TagCreate = z.object({ name: External.str(), product: Internal.ProductRelationCreate.optional() })
      