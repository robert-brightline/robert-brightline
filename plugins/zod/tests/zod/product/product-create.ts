
       
        import { z } from 'zod';
        import * as External from '@robert-brightline/zod';
        import * as Internal from '../internals.js';
        import * as Enums from '../enums.js';
  
      
      export const ProductCreate = z.object({ uuid: External.str(), name: External.str(), description: External.str().optional(), ownTags: External.str().array(), upc: External.str(), sku: External.str(), attributes: External.json().optional(), quantity: External.int(), price: External.num(), cost: External.num(), active: External.bool().optional(), category: Internal.CategoryRelationCreate.optional(), tags: Internal.TagRelationManyCreate.optional(), createdBy: Internal.UserRelationCreate.optional(), updatedBy: Internal.UserRelationCreate.optional(), status: Enums.StatusEnum, scopes: Enums.ScopeEnum.array() })
      