import { z } from 'zod';
import * as External from '@robert-brightline/zod';
export const UserOrder = z.object({
  id: External.dir().optional(),
  uuid: External.dir().optional(),
  createdAt: External.dir().optional(),
  updatedAt: External.dir().optional(),
  deletedAt: External.dir().optional(),
  username: External.dir().optional(),
  password: External.dir().optional(),
  userPermissions: External.orderByCount().optional(),
  sessions: External.orderByCount().optional(),
});
