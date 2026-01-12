import { z } from 'zod';
import * as Internal from '../internals.js';
export const SessionPermissionUpdate = z.object({
  session: Internal.SessionRelationCreate.optional(),
  permission: Internal.PermissionRelationCreate.optional(),
});
