import * as External from '@robert-brightline/zod';
import { z } from 'zod';
import * as Internal from '../internals.js';

export const UserCreate = z
  .object({
    username: External.email(),
    password: External.password(),
    userRoles: Internal.UserRoleRelationManyCreate.optional(),
  })
