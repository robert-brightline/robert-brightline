
       
        import { z } from 'zod';
        import * as External from '@robert-brightline/zod';
        import * as Internal from '../internals.js';
        import * as Enums from '../enums.js';
  

      export const ProductWhere = z.object({ id: External.IntegerFilter.optional(), uuid: External.StringFilter.optional(), createdAt: External.DateTimeFilter.optional(), updatedAt: External.DateTimeFilter.optional(), deletedAt: External.DateTimeFilter.optional(), name: External.StringFilter.optional(), description: External.StringFilter.optional(), ownTags: External.ArrayStringFilter.optional(), upc: External.StringFilter.optional(), sku: External.StringFilter.optional(), attributes: External.JsonFilter.optional(), quantity: External.IntegerFilter.optional(), price: External.NumberFilter.optional(), cost: External.NumberFilter.optional(), active: External.BooleanFilter.optional(), category: Internal.CategoryOwnWhere.optional(), categoryId: External.IntegerFilter.optional(), tags: Internal.TagRelationManyWhere.optional(), createdBy: Internal.UserOwnWhere.optional(), createdById: External.IntegerFilter.optional(), updatedBy: Internal.UserOwnWhere.optional(), updatedById: External.IntegerFilter.optional(), status: Enums.StatusEnumFilter.optional(), scopes: Enums.ScopeEnumArrayFilter.optional() })
      