
       
        import { z } from 'zod';
        import * as External from '@robert-brightline/zod';
        import * as Internal from '../internals.js';
        import * as Enums from '../enums.js';
  

      export const TagUpdate = z.object({ name: External.str().optional(), product: Internal.ProductRelationCreate.optional() })
      