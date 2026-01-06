import * as External from '@robert-brightline/zod';
import { z } from 'zod';
import * as Internal from '../internals.js';

export const CategoryOrder = z.object({
  id: External.dir().optional(),
  createdAt: External.dir().optional(),
  updatedAt: External.dir().optional(),
  deletedAt: External.dir().optional(),
  name: External.dir().optional(),
  parent: Internal.CategoryOwnOrder.optional(),
  parentId: External.dir().optional(),
  children: External.orderByCount().optional(),
  products: External.orderByCount().optional(),
});
