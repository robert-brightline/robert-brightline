
       
        import { z } from 'zod';
        import * as Internal from '../internals.js';
        import * as Enums from '../enums.js';
  
      
      export const PermissionCreate = z.object({ operation: Enums.OperationEnum, app: Internal.AppRelationCreate, resource: Internal.ResourceRelationCreate, rolePermissions: Internal.RolePermissionsRelationManyCreate.optional(), accessTokenPermissions: Internal.AccessTokenPermissionsRelationManyCreate.optional() })
      