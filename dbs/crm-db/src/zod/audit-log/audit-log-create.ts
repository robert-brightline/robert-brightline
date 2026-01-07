import { z } from 'zod';
import * as External from '@robert-brightline/zod';
import * as Enums from '../enums.js';
export const AuditLogCreate = z.object({
  subject: External.str(),
  message: External.str().optional(),
  operation: Enums.OperationEnum,
  operator: External.str(),
});
