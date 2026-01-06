
       
        import { z } from 'zod';
        import * as External from '@robert-brightline/zod';
        import * as Internal from '../internals.js';
        

export const AppCreate = z.object({ name: External.str(), permissions: Internal.PermissionRelationManyCreate.optional() })
      