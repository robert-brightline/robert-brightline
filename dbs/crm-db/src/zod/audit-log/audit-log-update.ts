import { z } from 'zod';
import * as External from '@robert-brightline/zod';
import * as Enums from '../enums.js';
export const AuditLogUpdate = z.object({
  subject: External.str().optional(),
  message: External.str().optional(),
  operation: Enums.OperationEnum.optional(),
  operator: External.str().optional(),
});
