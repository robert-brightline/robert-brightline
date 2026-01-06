
       
        import { z } from 'zod';
        import * as External from '@robert-brightline/zod';
        import * as Internal from '../internals.js';
        import * as Enums from '../enums.js';
  

      export const TagOrder = z.object({ id: External.dir().optional(), name: External.dir().optional(), product: Internal.ProductOwnOrder.optional(), productId: External.dir().optional() })
      