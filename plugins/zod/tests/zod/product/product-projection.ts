
       
        import { z } from 'zod';
        import * as External from '@robert-brightline/zod';
        import * as Internal from '../internals.js';
        import * as Enums from '../enums.js';
  

      export const ProductProjection = z.object({ id: External.bool().optional(), uuid: External.bool().optional(), createdAt: External.bool().optional(), updatedAt: External.bool().optional(), deletedAt: External.bool().optional(), name: External.bool().optional(), description: External.bool().optional(), ownTags: External.bool().optional(), upc: External.bool().optional(), sku: External.bool().optional(), attributes: External.bool().optional(), quantity: External.bool().optional(), price: External.bool().optional(), cost: External.bool().optional(), active: External.bool().optional(), category: CategoryRelationProjection, categoryId: External.bool().optional(), tags: TagRelationManyProjection, createdBy: UserRelationProjection, createdById: External.bool().optional(), updatedBy: UserRelationProjection, updatedById: External.bool().optional(), status: External.bool().optional(), scopes: External.bool().optional() })
      