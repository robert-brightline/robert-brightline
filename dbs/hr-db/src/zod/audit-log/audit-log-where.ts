import { z } from 'zod';
import * as External from '@robert-brightline/zod';
import * as Enums from '../enums.js';
export const AuditLogWhere = z.object({
  id: External.IntegerFilter.optional(),
  createdAt: External.DateTimeFilter.optional(),
  subject: External.StringFilter.optional(),
  message: External.StringFilter.optional(),
  operation: Enums.OperationEnumFilter.optional(),
  operator: External.StringFilter.optional(),
});
