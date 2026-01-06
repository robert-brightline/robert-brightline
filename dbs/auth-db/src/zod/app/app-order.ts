import { z } from 'zod';
import * as External from '@robert-brightline/zod';
export const AppOrder = z.object({
  id: External.dir().optional(),
  createdAt: External.dir().optional(),
  updatedAt: External.dir().optional(),
  deletedAt: External.dir().optional(),
  name: External.dir().optional(),
  permissions: External.orderByCount().optional(),
});
