
       
        import { z } from 'zod';
        import * as External from '@robert-brightline/zod';
        import * as Internal from '../internals.js';
        

export const UserRoleOrder = z.object({ id: External.dir().optional(), uuid: External.dir().optional(), createdAt: External.dir().optional(), updatedAt: External.dir().optional(), deletedAt: External.dir().optional(), user: Internal.UserOwnOrder.optional(), userId: External.dir().optional(), role: Internal.RoleOwnOrder.optional(), roleId: External.dir().optional() })
      