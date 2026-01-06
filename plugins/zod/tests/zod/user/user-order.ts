import * as External from '@robert-brightline/zod';
import { z } from 'zod';

export const UserOrder = z.object({
  id: External.dir().optional(),
  uuid: External.dir().optional(),
  createdAt: External.dir().optional(),
  updatedAt: External.dir().optional(),
  deletedAt: External.dir().optional(),
  username: External.dir().optional(),
  password: External.dir().optional(),
  updatedProducts: External.orderByCount().optional(),
  createdProducts: External.orderByCount().optional(),
});
