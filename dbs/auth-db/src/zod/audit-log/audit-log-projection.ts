import { z } from 'zod';
import * as External from '@robert-brightline/zod';
export const AuditLogProjection = z.object({
  id: External.bool().optional(),
  createdAt: External.bool().optional(),
  subject: External.bool().optional(),
  message: External.bool().optional(),
  operation: External.bool().optional(),
  operatorId: External.bool().optional(),
});
