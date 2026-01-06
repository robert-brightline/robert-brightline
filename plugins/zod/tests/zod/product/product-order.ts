
       
        import { z } from 'zod';
        import * as External from '@robert-brightline/zod';
        import * as Internal from '../internals.js';
        import * as Enums from '../enums.js';
  

      export const ProductOrder = z.object({ id: External.dir().optional(), uuid: External.dir().optional(), createdAt: External.dir().optional(), updatedAt: External.dir().optional(), deletedAt: External.dir().optional(), name: External.dir().optional(), description: External.dir().optional(), ownTags: External.dir().optional(), upc: External.dir().optional(), sku: External.dir().optional(), attributes: External.dir().optional(), quantity: External.dir().optional(), price: External.dir().optional(), cost: External.dir().optional(), active: External.dir().optional(), category: Internal.CategoryOwnOrder.optional(), categoryId: External.dir().optional(), tags: External.orderByCount().optional(), createdBy: Internal.UserOwnOrder.optional(), createdById: External.dir().optional(), updatedBy: Internal.UserOwnOrder.optional(), updatedById: External.dir().optional(), status: External.dir().optional(), scopes: External.dir().optional() })
      