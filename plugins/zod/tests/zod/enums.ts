import { z } from 'zod';
import * as External from '@robert-brightline/zod';
export const StatusEnum = z.enum([ 'ACTIVE', 'PASSIVE' ])
export const StatusEnumFilter = z.object({
            equals: StatusEnum.optional(),
            in: StatusEnum.array().optional(),
            notIn: StatusEnum.array().optional(),
            not: StatusEnum.optional() ,
        })
export const StatusEnumArrayFilter = z.object({
         equals: StatusEnum.array().optional(), 
         has: StatusEnum.optional(), 
         hasEvery: StatusEnum.array().optional(), 
         hasSome: StatusEnum.array().optional(),
         isEmpty: External.bool().optional()
        })
export const ScopeEnum = z.enum([ 'APP', 'Low', 'High' ])
export const ScopeEnumFilter = z.object({
            equals: ScopeEnum.optional(),
            in: ScopeEnum.array().optional(),
            notIn: ScopeEnum.array().optional(),
            not: ScopeEnum.optional() ,
        })
export const ScopeEnumArrayFilter = z.object({
         equals: ScopeEnum.array().optional(), 
         has: ScopeEnum.optional(), 
         hasEvery: ScopeEnum.array().optional(), 
         hasSome: ScopeEnum.array().optional(),
         isEmpty: External.bool().optional()
        })
export const CategoryField = z.enum([ 'id', 'createdAt', 'updatedAt', 'deletedAt', 'name', 'parentId' ])
export const UserField = z.enum([ 'id', 'uuid', 'createdAt', 'updatedAt', 'deletedAt', 'username', 'password' ])
export const TagField = z.enum([ 'id', 'name', 'productId' ])
export const ProductField = z.enum([ 'id', 'uuid', 'createdAt', 'updatedAt', 'deletedAt', 'name', 'description', 'ownTags', 'upc', 'sku', 'attributes', 'quantity', 'price', 'cost', 'active', 'categoryId', 'createdById', 'updatedById', 'status', 'scopes' ])