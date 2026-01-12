import { z } from 'zod';
import * as Internal from '../internals.js';
export const SessionPermissionCreate = z.object({
  session: Internal.SessionRelationCreate,
  permission: Internal.PermissionRelationCreate,
});
