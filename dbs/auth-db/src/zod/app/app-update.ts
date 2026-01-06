
       
        import { z } from 'zod';
        import * as External from '@robert-brightline/zod';
        import * as Internal from '../internals.js';
        

export const AppUpdate = z.object({ name: External.str().optional(), permissions: Internal.PermissionRelationManyCreate.optional() })
      