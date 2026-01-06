
       
        import { z } from 'zod';
        import * as External from '@robert-brightline/zod';
        import * as Internal from '../internals.js';
        import * as Enums from '../enums.js';
  

      export const TagWhere = z.object({ id: External.IntegerFilter.optional(), name: External.StringFilter.optional(), product: Internal.ProductOwnWhere.optional(), productId: External.IntegerFilter.optional() })
      