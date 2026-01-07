import { z } from 'zod';
import * as External from '@robert-brightline/zod';
export const AuditLogOrder = z.object({
  id: External.dir().optional(),
  createdAt: External.dir().optional(),
  subject: External.dir().optional(),
  message: External.dir().optional(),
  operation: External.dir().optional(),
  operator: External.dir().optional(),
});
