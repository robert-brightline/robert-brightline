import * as External from '@robert-brightline/zod';
import * as Enums from './enums.js'
import { z } from 'zod';
export const CategoryOwnProjection = z.object({ id: External.bool().optional(), createdAt: External.bool().optional(), updatedAt: External.bool().optional(), deletedAt: External.bool().optional(), name: External.bool().optional(), parentId: External.bool().optional() })
export const CategoryOwnOrder = z.object({ id: External.dir().optional(), createdAt: External.dir().optional(), updatedAt: External.dir().optional(), deletedAt: External.dir().optional(), name: External.dir().optional(), parentId: External.dir().optional() })
export const CategoryOwnWhere = z.object({ id: External.IntegerFilter.optional(), createdAt: External.DateTimeFilter.optional(), updatedAt: External.DateTimeFilter.optional(), deletedAt: External.DateTimeFilter.optional(), name: External.StringFilter.optional(), parentId: External.IntegerFilter.optional() })
export const CategoryOwnCreate = z.object({ name: External.str() })
export const CategoryOwnUpdate = z.object({ name: External.str().optional() })
export const CategoryRelationProjection = z.union([ 
         External.bool(),
         z.object({ 
            select: CategoryOwnProjection.optional(), 
            where: CategoryOwnWhere.optional()
         })
      ])
export const CategoryRelationManyProjection = z.union([ 
         External.bool(),
         z.object({ 
            select: CategoryOwnProjection.optional(), 
            where: CategoryOwnWhere.optional(), 
            orderBy: CategoryOwnOrder.optional(),
            take: External.int().min(0).optional(),
            skip: External.int().min(0).optional()
         })
      ])
export const CategoryRelationManyWhere = z.union([
        z.object({ some: CategoryOwnWhere }), 
        z.object({ every: CategoryOwnWhere }), 
        z.object({ none: CategoryOwnWhere })
      ])
export const CategoryRelationCreate = z.union([ 
         External.connect(),
         z.object({ 
          create: CategoryOwnCreate 
         })
      ])
export const CategoryRelationManyCreate = z.union([ 
         External.connectMany(),
         z.object({ 
            createMany: z.object({ 
                data: CategoryOwnCreate.array()
            }) 
         })
      ])
export const UserOwnProjection = z.object({ id: External.bool().optional(), uuid: External.bool().optional(), createdAt: External.bool().optional(), updatedAt: External.bool().optional(), deletedAt: External.bool().optional(), username: External.bool().optional(), password: External.bool().optional() })
export const UserOwnOrder = z.object({ id: External.dir().optional(), uuid: External.dir().optional(), createdAt: External.dir().optional(), updatedAt: External.dir().optional(), deletedAt: External.dir().optional(), username: External.dir().optional(), password: External.dir().optional() })
export const UserOwnWhere = z.object({ id: External.IntegerFilter.optional(), uuid: External.StringFilter.optional(), createdAt: External.DateTimeFilter.optional(), updatedAt: External.DateTimeFilter.optional(), deletedAt: External.DateTimeFilter.optional(), username: External.StringFilter.optional(), password: External.StringFilter.optional() })
export const UserOwnCreate = z.object({ uuid: External.str(), username: External.str(), password: External.str() })
export const UserOwnUpdate = z.object({ uuid: External.str().optional(), username: External.str().optional(), password: External.str().optional() })
export const UserRelationProjection = z.union([ 
         External.bool(),
         z.object({ 
            select: UserOwnProjection.optional(), 
            where: UserOwnWhere.optional()
         })
      ])
export const UserRelationManyProjection = z.union([ 
         External.bool(),
         z.object({ 
            select: UserOwnProjection.optional(), 
            where: UserOwnWhere.optional(), 
            orderBy: UserOwnOrder.optional(),
            take: External.int().min(0).optional(),
            skip: External.int().min(0).optional()
         })
      ])
export const UserRelationManyWhere = z.union([
        z.object({ some: UserOwnWhere }), 
        z.object({ every: UserOwnWhere }), 
        z.object({ none: UserOwnWhere })
      ])
export const UserRelationCreate = z.union([ 
         External.connect(),
         z.object({ 
          create: UserOwnCreate 
         })
      ])
export const UserRelationManyCreate = z.union([ 
         External.connectMany(),
         z.object({ 
            createMany: z.object({ 
                data: UserOwnCreate.array()
            }) 
         })
      ])
export const TagOwnProjection = z.object({ id: External.bool().optional(), name: External.bool().optional(), productId: External.bool().optional() })
export const TagOwnOrder = z.object({ id: External.dir().optional(), name: External.dir().optional(), productId: External.dir().optional() })
export const TagOwnWhere = z.object({ id: External.IntegerFilter.optional(), name: External.StringFilter.optional(), productId: External.IntegerFilter.optional() })
export const TagOwnCreate = z.object({ name: External.str() })
export const TagOwnUpdate = z.object({ name: External.str().optional() })
export const TagRelationProjection = z.union([ 
         External.bool(),
         z.object({ 
            select: TagOwnProjection.optional(), 
            where: TagOwnWhere.optional()
         })
      ])
export const TagRelationManyProjection = z.union([ 
         External.bool(),
         z.object({ 
            select: TagOwnProjection.optional(), 
            where: TagOwnWhere.optional(), 
            orderBy: TagOwnOrder.optional(),
            take: External.int().min(0).optional(),
            skip: External.int().min(0).optional()
         })
      ])
export const TagRelationManyWhere = z.union([
        z.object({ some: TagOwnWhere }), 
        z.object({ every: TagOwnWhere }), 
        z.object({ none: TagOwnWhere })
      ])
export const TagRelationCreate = z.union([ 
         External.connect(),
         z.object({ 
          create: TagOwnCreate 
         })
      ])
export const TagRelationManyCreate = z.union([ 
         External.connectMany(),
         z.object({ 
            createMany: z.object({ 
                data: TagOwnCreate.array()
            }) 
         })
      ])
export const ProductOwnProjection = z.object({ id: External.bool().optional(), uuid: External.bool().optional(), createdAt: External.bool().optional(), updatedAt: External.bool().optional(), deletedAt: External.bool().optional(), name: External.bool().optional(), description: External.bool().optional(), ownTags: External.bool().optional(), upc: External.bool().optional(), sku: External.bool().optional(), attributes: External.bool().optional(), quantity: External.bool().optional(), price: External.bool().optional(), cost: External.bool().optional(), active: External.bool().optional(), categoryId: External.bool().optional(), createdById: External.bool().optional(), updatedById: External.bool().optional(), status: External.bool().optional(), scopes: External.bool().optional() })
export const ProductOwnOrder = z.object({ id: External.dir().optional(), uuid: External.dir().optional(), createdAt: External.dir().optional(), updatedAt: External.dir().optional(), deletedAt: External.dir().optional(), name: External.dir().optional(), description: External.dir().optional(), ownTags: External.dir().optional(), upc: External.dir().optional(), sku: External.dir().optional(), attributes: External.dir().optional(), quantity: External.dir().optional(), price: External.dir().optional(), cost: External.dir().optional(), active: External.dir().optional(), categoryId: External.dir().optional(), createdById: External.dir().optional(), updatedById: External.dir().optional(), status: External.dir().optional(), scopes: External.dir().optional() })
export const ProductOwnWhere = z.object({ id: External.IntegerFilter.optional(), uuid: External.StringFilter.optional(), createdAt: External.DateTimeFilter.optional(), updatedAt: External.DateTimeFilter.optional(), deletedAt: External.DateTimeFilter.optional(), name: External.StringFilter.optional(), description: External.StringFilter.optional(), ownTags: External.ArrayStringFilter.optional(), upc: External.StringFilter.optional(), sku: External.StringFilter.optional(), attributes: External.JsonFilter.optional(), quantity: External.IntegerFilter.optional(), price: External.NumberFilter.optional(), cost: External.NumberFilter.optional(), active: External.BooleanFilter.optional(), categoryId: External.IntegerFilter.optional(), createdById: External.IntegerFilter.optional(), updatedById: External.IntegerFilter.optional(), status: Enums.StatusEnumFilter.optional(), scopes: Enums.ScopeEnumArrayFilter.optional() })
export const ProductOwnCreate = z.object({ uuid: External.str(), name: External.str(), description: External.str().optional(), ownTags: External.str().array(), upc: External.str(), sku: External.str(), attributes: External.json().optional(), quantity: External.int(), price: External.num(), cost: External.num(), active: External.bool().optional(), status: Enums.StatusEnum, scopes: Enums.ScopeEnum.array() })
export const ProductOwnUpdate = z.object({ uuid: External.str().optional(), name: External.str().optional(), description: External.str().optional(), ownTags: External.str().array().optional(), upc: External.str().optional(), sku: External.str().optional(), attributes: External.json().optional(), quantity: External.int().optional(), price: External.num().optional(), cost: External.num().optional(), active: External.bool().optional(), status: Enums.StatusEnum.optional(), scopes: Enums.ScopeEnum.array().optional() })
export const ProductRelationProjection = z.union([ 
         External.bool(),
         z.object({ 
            select: ProductOwnProjection.optional(), 
            where: ProductOwnWhere.optional()
         })
      ])
export const ProductRelationManyProjection = z.union([ 
         External.bool(),
         z.object({ 
            select: ProductOwnProjection.optional(), 
            where: ProductOwnWhere.optional(), 
            orderBy: ProductOwnOrder.optional(),
            take: External.int().min(0).optional(),
            skip: External.int().min(0).optional()
         })
      ])
export const ProductRelationManyWhere = z.union([
        z.object({ some: ProductOwnWhere }), 
        z.object({ every: ProductOwnWhere }), 
        z.object({ none: ProductOwnWhere })
      ])
export const ProductRelationCreate = z.union([ 
         External.connect(),
         z.object({ 
          create: ProductOwnCreate 
         })
      ])
export const ProductRelationManyCreate = z.union([ 
         External.connectMany(),
         z.object({ 
            createMany: z.object({ 
                data: ProductOwnCreate.array()
            }) 
         })
      ])