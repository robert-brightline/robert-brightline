import { z } from 'zod';
import * as Internal from '../internals.js';
import * as External from '@robert-brightline/zod';
export const ResourceOrder = z.object({
  id: External.dir().optional(),
  createdAt: External.dir().optional(),
  name: External.dir().optional(),
  appName: External.dir().optional(),
  appId: External.dir().optional(),
  app: Internal.AppOwnOrder.optional(),
  permissions: External.orderByCount().optional(),
});
