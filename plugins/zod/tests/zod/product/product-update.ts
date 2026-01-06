
       
        import { z } from 'zod';
        import * as External from '@robert-brightline/zod';
        import * as Internal from '../internals.js';
        import * as Enums from '../enums.js';
  

      export const ProductUpdate = z.object({ uuid: External.str().optional(), name: External.str().optional(), description: External.str().optional(), ownTags: External.str().array().optional(), upc: External.str().optional(), sku: External.str().optional(), attributes: External.json().optional(), quantity: External.int().optional(), price: External.num().optional(), cost: External.num().optional(), active: External.bool().optional(), category: Internal.CategoryRelationCreate.optional(), tags: Internal.TagRelationManyCreate.optional(), createdBy: Internal.UserRelationCreate.optional(), updatedBy: Internal.UserRelationCreate.optional(), status: Enums.StatusEnum.optional(), scopes: Enums.ScopeEnum.array().optional() })
      