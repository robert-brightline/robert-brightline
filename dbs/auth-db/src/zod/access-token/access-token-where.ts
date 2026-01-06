
       
        import { z } from 'zod';
        import * as External from '@robert-brightline/zod';
        import * as Internal from '../internals.js';
        

export const AccessTokenWhere = z.object({ id: External.IntegerFilter.optional(), uuid: External.StringFilter.optional(), createdAt: External.DateTimeFilter.optional(), updatedAt: External.DateTimeFilter.optional(), deletedAt: External.DateTimeFilter.optional(), name: External.StringFilter.optional(), token: External.StringFilter.optional(), accessTokenPermissions: Internal.AccessTokenPermissionsRelationManyWhere.optional() })
      