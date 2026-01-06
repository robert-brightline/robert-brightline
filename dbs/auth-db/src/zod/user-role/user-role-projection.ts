
       
        import { z } from 'zod';
        import * as External from '@robert-brightline/zod';
        import * as Internal from '../internals.js';
        

export const UserRoleProjection = z.object({ id: External.bool().optional(), uuid: External.bool().optional(), createdAt: External.bool().optional(), updatedAt: External.bool().optional(), deletedAt: External.bool().optional(), user: Internal.UserRelationProjection, userId: External.bool().optional(), role: Internal.RoleRelationProjection, roleId: External.bool().optional() })
      