
       
        import { z } from 'zod';
        import * as External from '@robert-brightline/zod';
        import * as Internal from '../internals.js';
        import * as Enums from '../enums.js';
  

      export const TagProjection = z.object({ id: External.bool().optional(), name: External.bool().optional(), product: ProductRelationProjection, productId: External.bool().optional() })
      