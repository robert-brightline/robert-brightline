import { z } from 'zod';
import * as External from '@robert-brightline/zod';
export const AccessTokenOrder = z.object({
  id: External.dir().optional(),
  uuid: External.dir().optional(),
  createdAt: External.dir().optional(),
  updatedAt: External.dir().optional(),
  deletedAt: External.dir().optional(),
  name: External.dir().optional(),
  token: External.dir().optional(),
  accessTokenPermissions: External.orderByCount().optional(),
});
