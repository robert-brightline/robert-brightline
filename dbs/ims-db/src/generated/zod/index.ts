import { z } from 'zod';
import type { Prisma } from '../prisma/client.js';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////

/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum([
  'ReadUncommitted',
  'ReadCommitted',
  'RepeatableRead',
  'Serializable',
]);

export const ProductScalarFieldEnumSchema = z.enum([
  'id',
  'uuid',
  'createdAt',
  'updatedAt',
  'deletedAt',
  'name',
  'description',
  'upc',
  'sku',
  'categoryId',
  'imagesId',
  'parentId',
]);

export const SortOrderSchema = z.enum(['asc', 'desc']);

export const QueryModeSchema = z.enum(['default', 'insensitive']);

export const NullsOrderSchema = z.enum(['first', 'last']);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// PRODUCT SCHEMA
/////////////////////////////////////////

export const ProductSchema = z.object({
  id: z.number().int(),
  uuid: z.uuid(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  deletedAt: z.coerce.date().nullable(),
  name: z.string(),
  description: z.string().nullable(),
  upc: z.string(),
  sku: z.string(),
  categoryId: z.string().nullable(),
  imagesId: z.string().nullable(),
  parentId: z.number().int().nullable(),
});

export type Product = z.infer<typeof ProductSchema>;

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// PRODUCT
//------------------------------------------------------

export const ProductIncludeSchema: z.ZodType<Prisma.ProductInclude> = z
  .object({
    product: z.union([z.boolean(), z.lazy(() => ProductArgsSchema)]).optional(),
    variants: z
      .union([z.boolean(), z.lazy(() => ProductFindManyArgsSchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => ProductCountOutputTypeArgsSchema)])
      .optional(),
  })
  .strict();

export const ProductArgsSchema: z.ZodType<Prisma.ProductDefaultArgs> = z
  .object({
    select: z.lazy(() => ProductSelectSchema).optional(),
    include: z.lazy(() => ProductIncludeSchema).optional(),
  })
  .strict();

export const ProductCountOutputTypeArgsSchema: z.ZodType<Prisma.ProductCountOutputTypeDefaultArgs> =
  z
    .object({
      select: z.lazy(() => ProductCountOutputTypeSelectSchema).nullish(),
    })
    .strict();

export const ProductCountOutputTypeSelectSchema: z.ZodType<Prisma.ProductCountOutputTypeSelect> =
  z
    .object({
      variants: z.boolean().optional(),
    })
    .strict();

export const ProductSelectSchema: z.ZodType<Prisma.ProductSelect> = z
  .object({
    id: z.boolean().optional(),
    uuid: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    deletedAt: z.boolean().optional(),
    name: z.boolean().optional(),
    description: z.boolean().optional(),
    upc: z.boolean().optional(),
    sku: z.boolean().optional(),
    categoryId: z.boolean().optional(),
    imagesId: z.boolean().optional(),
    parentId: z.boolean().optional(),
    product: z.union([z.boolean(), z.lazy(() => ProductArgsSchema)]).optional(),
    variants: z
      .union([z.boolean(), z.lazy(() => ProductFindManyArgsSchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => ProductCountOutputTypeArgsSchema)])
      .optional(),
  })
  .strict();

/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const ProductWhereInputSchema: z.ZodType<Prisma.ProductWhereInput> =
  z.strictObject({
    AND: z
      .union([
        z.lazy(() => ProductWhereInputSchema),
        z.lazy(() => ProductWhereInputSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ProductWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ProductWhereInputSchema),
        z.lazy(() => ProductWhereInputSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
    uuid: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
      .optional(),
    deletedAt: z
      .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
      .optional()
      .nullable(),
    name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    description: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    upc: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    sku: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    categoryId: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    imagesId: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    parentId: z
      .union([z.lazy(() => IntNullableFilterSchema), z.number()])
      .optional()
      .nullable(),
    product: z
      .union([
        z.lazy(() => ProductNullableScalarRelationFilterSchema),
        z.lazy(() => ProductWhereInputSchema),
      ])
      .optional()
      .nullable(),
    variants: z.lazy(() => ProductListRelationFilterSchema).optional(),
  });

export const ProductOrderByWithRelationInputSchema: z.ZodType<Prisma.ProductOrderByWithRelationInput> =
  z.strictObject({
    id: z.lazy(() => SortOrderSchema).optional(),
    uuid: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    deletedAt: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputSchema),
      ])
      .optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    description: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputSchema),
      ])
      .optional(),
    upc: z.lazy(() => SortOrderSchema).optional(),
    sku: z.lazy(() => SortOrderSchema).optional(),
    categoryId: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputSchema),
      ])
      .optional(),
    imagesId: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputSchema),
      ])
      .optional(),
    parentId: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputSchema),
      ])
      .optional(),
    product: z.lazy(() => ProductOrderByWithRelationInputSchema).optional(),
    variants: z
      .lazy(() => ProductOrderByRelationAggregateInputSchema)
      .optional(),
  });

export const ProductWhereUniqueInputSchema: z.ZodType<Prisma.ProductWhereUniqueInput> =
  z
    .union([
      z.object({
        id: z.number().int(),
        uuid: z.uuid(),
        name: z.string(),
        upc: z.string(),
        sku: z.string(),
      }),
      z.object({
        id: z.number().int(),
        uuid: z.uuid(),
        name: z.string(),
        upc: z.string(),
      }),
      z.object({
        id: z.number().int(),
        uuid: z.uuid(),
        name: z.string(),
        sku: z.string(),
      }),
      z.object({
        id: z.number().int(),
        uuid: z.uuid(),
        name: z.string(),
      }),
      z.object({
        id: z.number().int(),
        uuid: z.uuid(),
        upc: z.string(),
        sku: z.string(),
      }),
      z.object({
        id: z.number().int(),
        uuid: z.uuid(),
        upc: z.string(),
      }),
      z.object({
        id: z.number().int(),
        uuid: z.uuid(),
        sku: z.string(),
      }),
      z.object({
        id: z.number().int(),
        uuid: z.uuid(),
      }),
      z.object({
        id: z.number().int(),
        name: z.string(),
        upc: z.string(),
        sku: z.string(),
      }),
      z.object({
        id: z.number().int(),
        name: z.string(),
        upc: z.string(),
      }),
      z.object({
        id: z.number().int(),
        name: z.string(),
        sku: z.string(),
      }),
      z.object({
        id: z.number().int(),
        name: z.string(),
      }),
      z.object({
        id: z.number().int(),
        upc: z.string(),
        sku: z.string(),
      }),
      z.object({
        id: z.number().int(),
        upc: z.string(),
      }),
      z.object({
        id: z.number().int(),
        sku: z.string(),
      }),
      z.object({
        id: z.number().int(),
      }),
      z.object({
        uuid: z.uuid(),
        name: z.string(),
        upc: z.string(),
        sku: z.string(),
      }),
      z.object({
        uuid: z.uuid(),
        name: z.string(),
        upc: z.string(),
      }),
      z.object({
        uuid: z.uuid(),
        name: z.string(),
        sku: z.string(),
      }),
      z.object({
        uuid: z.uuid(),
        name: z.string(),
      }),
      z.object({
        uuid: z.uuid(),
        upc: z.string(),
        sku: z.string(),
      }),
      z.object({
        uuid: z.uuid(),
        upc: z.string(),
      }),
      z.object({
        uuid: z.uuid(),
        sku: z.string(),
      }),
      z.object({
        uuid: z.uuid(),
      }),
      z.object({
        name: z.string(),
        upc: z.string(),
        sku: z.string(),
      }),
      z.object({
        name: z.string(),
        upc: z.string(),
      }),
      z.object({
        name: z.string(),
        sku: z.string(),
      }),
      z.object({
        name: z.string(),
      }),
      z.object({
        upc: z.string(),
        sku: z.string(),
      }),
      z.object({
        upc: z.string(),
      }),
      z.object({
        sku: z.string(),
      }),
    ])
    .and(
      z.strictObject({
        id: z.number().int().optional(),
        uuid: z.uuid().optional(),
        name: z.string().optional(),
        upc: z.string().optional(),
        sku: z.string().optional(),
        AND: z
          .union([
            z.lazy(() => ProductWhereInputSchema),
            z.lazy(() => ProductWhereInputSchema).array(),
          ])
          .optional(),
        OR: z
          .lazy(() => ProductWhereInputSchema)
          .array()
          .optional(),
        NOT: z
          .union([
            z.lazy(() => ProductWhereInputSchema),
            z.lazy(() => ProductWhereInputSchema).array(),
          ])
          .optional(),
        createdAt: z
          .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
          .optional(),
        updatedAt: z
          .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
          .optional(),
        deletedAt: z
          .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
          .optional()
          .nullable(),
        description: z
          .union([z.lazy(() => StringNullableFilterSchema), z.string()])
          .optional()
          .nullable(),
        categoryId: z
          .union([z.lazy(() => StringNullableFilterSchema), z.string()])
          .optional()
          .nullable(),
        imagesId: z
          .union([z.lazy(() => StringNullableFilterSchema), z.string()])
          .optional()
          .nullable(),
        parentId: z
          .union([z.lazy(() => IntNullableFilterSchema), z.number().int()])
          .optional()
          .nullable(),
        product: z
          .union([
            z.lazy(() => ProductNullableScalarRelationFilterSchema),
            z.lazy(() => ProductWhereInputSchema),
          ])
          .optional()
          .nullable(),
        variants: z.lazy(() => ProductListRelationFilterSchema).optional(),
      }),
    );

export const ProductOrderByWithAggregationInputSchema: z.ZodType<Prisma.ProductOrderByWithAggregationInput> =
  z.strictObject({
    id: z.lazy(() => SortOrderSchema).optional(),
    uuid: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    deletedAt: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputSchema),
      ])
      .optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    description: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputSchema),
      ])
      .optional(),
    upc: z.lazy(() => SortOrderSchema).optional(),
    sku: z.lazy(() => SortOrderSchema).optional(),
    categoryId: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputSchema),
      ])
      .optional(),
    imagesId: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputSchema),
      ])
      .optional(),
    parentId: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputSchema),
      ])
      .optional(),
    _count: z.lazy(() => ProductCountOrderByAggregateInputSchema).optional(),
    _avg: z.lazy(() => ProductAvgOrderByAggregateInputSchema).optional(),
    _max: z.lazy(() => ProductMaxOrderByAggregateInputSchema).optional(),
    _min: z.lazy(() => ProductMinOrderByAggregateInputSchema).optional(),
    _sum: z.lazy(() => ProductSumOrderByAggregateInputSchema).optional(),
  });

export const ProductScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ProductScalarWhereWithAggregatesInput> =
  z.strictObject({
    AND: z
      .union([
        z.lazy(() => ProductScalarWhereWithAggregatesInputSchema),
        z.lazy(() => ProductScalarWhereWithAggregatesInputSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ProductScalarWhereWithAggregatesInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ProductScalarWhereWithAggregatesInputSchema),
        z.lazy(() => ProductScalarWhereWithAggregatesInputSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()])
      .optional(),
    uuid: z
      .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
      .optional(),
    createdAt: z
      .union([
        z.lazy(() => DateTimeWithAggregatesFilterSchema),
        z.coerce.date(),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.lazy(() => DateTimeWithAggregatesFilterSchema),
        z.coerce.date(),
      ])
      .optional(),
    deletedAt: z
      .union([
        z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),
        z.coerce.date(),
      ])
      .optional()
      .nullable(),
    name: z
      .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
      .optional(),
    description: z
      .union([
        z.lazy(() => StringNullableWithAggregatesFilterSchema),
        z.string(),
      ])
      .optional()
      .nullable(),
    upc: z
      .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
      .optional(),
    sku: z
      .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
      .optional(),
    categoryId: z
      .union([
        z.lazy(() => StringNullableWithAggregatesFilterSchema),
        z.string(),
      ])
      .optional()
      .nullable(),
    imagesId: z
      .union([
        z.lazy(() => StringNullableWithAggregatesFilterSchema),
        z.string(),
      ])
      .optional()
      .nullable(),
    parentId: z
      .union([z.lazy(() => IntNullableWithAggregatesFilterSchema), z.number()])
      .optional()
      .nullable(),
  });

export const ProductCreateInputSchema: z.ZodType<Prisma.ProductCreateInput> =
  z.strictObject({
    uuid: z.uuid().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    deletedAt: z.coerce.date().optional().nullable(),
    name: z.string(),
    description: z.string().optional().nullable(),
    upc: z.string(),
    sku: z.string(),
    categoryId: z.string().optional().nullable(),
    imagesId: z.string().optional().nullable(),
    product: z
      .lazy(() => ProductCreateNestedOneWithoutVariantsInputSchema)
      .optional(),
    variants: z
      .lazy(() => ProductCreateNestedManyWithoutProductInputSchema)
      .optional(),
  });

export const ProductUncheckedCreateInputSchema: z.ZodType<Prisma.ProductUncheckedCreateInput> =
  z.strictObject({
    id: z.number().int().optional(),
    uuid: z.uuid().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    deletedAt: z.coerce.date().optional().nullable(),
    name: z.string(),
    description: z.string().optional().nullable(),
    upc: z.string(),
    sku: z.string(),
    categoryId: z.string().optional().nullable(),
    imagesId: z.string().optional().nullable(),
    parentId: z.number().int().optional().nullable(),
    variants: z
      .lazy(() => ProductUncheckedCreateNestedManyWithoutProductInputSchema)
      .optional(),
  });

export const ProductUpdateInputSchema: z.ZodType<Prisma.ProductUpdateInput> =
  z.strictObject({
    uuid: z
      .union([z.uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    deletedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    name: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    description: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    upc: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    sku: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    categoryId: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    imagesId: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    product: z
      .lazy(() => ProductUpdateOneWithoutVariantsNestedInputSchema)
      .optional(),
    variants: z
      .lazy(() => ProductUpdateManyWithoutProductNestedInputSchema)
      .optional(),
  });

export const ProductUncheckedUpdateInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateInput> =
  z.strictObject({
    id: z
      .union([
        z.number().int(),
        z.lazy(() => IntFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    uuid: z
      .union([z.uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    deletedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    name: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    description: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    upc: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    sku: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    categoryId: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    imagesId: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    parentId: z
      .union([
        z.number().int(),
        z.lazy(() => NullableIntFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    variants: z
      .lazy(() => ProductUncheckedUpdateManyWithoutProductNestedInputSchema)
      .optional(),
  });

export const ProductCreateManyInputSchema: z.ZodType<Prisma.ProductCreateManyInput> =
  z.strictObject({
    id: z.number().int().optional(),
    uuid: z.uuid().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    deletedAt: z.coerce.date().optional().nullable(),
    name: z.string(),
    description: z.string().optional().nullable(),
    upc: z.string(),
    sku: z.string(),
    categoryId: z.string().optional().nullable(),
    imagesId: z.string().optional().nullable(),
    parentId: z.number().int().optional().nullable(),
  });

export const ProductUpdateManyMutationInputSchema: z.ZodType<Prisma.ProductUpdateManyMutationInput> =
  z.strictObject({
    uuid: z
      .union([z.uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    deletedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    name: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    description: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    upc: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    sku: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    categoryId: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    imagesId: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
  });

export const ProductUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateManyInput> =
  z.strictObject({
    id: z
      .union([
        z.number().int(),
        z.lazy(() => IntFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    uuid: z
      .union([z.uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    deletedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    name: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    description: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    upc: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    sku: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    categoryId: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    imagesId: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    parentId: z
      .union([
        z.number().int(),
        z.lazy(() => NullableIntFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
  });

export const IntFilterSchema: z.ZodType<Prisma.IntFilter> = z.strictObject({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([z.number(), z.lazy(() => NestedIntFilterSchema)]).optional(),
});

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> =
  z.strictObject({
    equals: z.string().optional(),
    in: z.string().array().optional(),
    notIn: z.string().array().optional(),
    lt: z.string().optional(),
    lte: z.string().optional(),
    gt: z.string().optional(),
    gte: z.string().optional(),
    contains: z.string().optional(),
    startsWith: z.string().optional(),
    endsWith: z.string().optional(),
    mode: z.lazy(() => QueryModeSchema).optional(),
    not: z
      .union([z.string(), z.lazy(() => NestedStringFilterSchema)])
      .optional(),
  });

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> =
  z.strictObject({
    equals: z.coerce.date().optional(),
    in: z.coerce.date().array().optional(),
    notIn: z.coerce.date().array().optional(),
    lt: z.coerce.date().optional(),
    lte: z.coerce.date().optional(),
    gt: z.coerce.date().optional(),
    gte: z.coerce.date().optional(),
    not: z
      .union([z.coerce.date(), z.lazy(() => NestedDateTimeFilterSchema)])
      .optional(),
  });

export const DateTimeNullableFilterSchema: z.ZodType<Prisma.DateTimeNullableFilter> =
  z.strictObject({
    equals: z.coerce.date().optional().nullable(),
    in: z.coerce.date().array().optional().nullable(),
    notIn: z.coerce.date().array().optional().nullable(),
    lt: z.coerce.date().optional(),
    lte: z.coerce.date().optional(),
    gt: z.coerce.date().optional(),
    gte: z.coerce.date().optional(),
    not: z
      .union([
        z.coerce.date(),
        z.lazy(() => NestedDateTimeNullableFilterSchema),
      ])
      .optional()
      .nullable(),
  });

export const StringNullableFilterSchema: z.ZodType<Prisma.StringNullableFilter> =
  z.strictObject({
    equals: z.string().optional().nullable(),
    in: z.string().array().optional().nullable(),
    notIn: z.string().array().optional().nullable(),
    lt: z.string().optional(),
    lte: z.string().optional(),
    gt: z.string().optional(),
    gte: z.string().optional(),
    contains: z.string().optional(),
    startsWith: z.string().optional(),
    endsWith: z.string().optional(),
    mode: z.lazy(() => QueryModeSchema).optional(),
    not: z
      .union([z.string(), z.lazy(() => NestedStringNullableFilterSchema)])
      .optional()
      .nullable(),
  });

export const IntNullableFilterSchema: z.ZodType<Prisma.IntNullableFilter> =
  z.strictObject({
    equals: z.number().optional().nullable(),
    in: z.number().array().optional().nullable(),
    notIn: z.number().array().optional().nullable(),
    lt: z.number().optional(),
    lte: z.number().optional(),
    gt: z.number().optional(),
    gte: z.number().optional(),
    not: z
      .union([z.number(), z.lazy(() => NestedIntNullableFilterSchema)])
      .optional()
      .nullable(),
  });

export const ProductNullableScalarRelationFilterSchema: z.ZodType<Prisma.ProductNullableScalarRelationFilter> =
  z.strictObject({
    is: z
      .lazy(() => ProductWhereInputSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => ProductWhereInputSchema)
      .optional()
      .nullable(),
  });

export const ProductListRelationFilterSchema: z.ZodType<Prisma.ProductListRelationFilter> =
  z.strictObject({
    every: z.lazy(() => ProductWhereInputSchema).optional(),
    some: z.lazy(() => ProductWhereInputSchema).optional(),
    none: z.lazy(() => ProductWhereInputSchema).optional(),
  });

export const SortOrderInputSchema: z.ZodType<Prisma.SortOrderInput> =
  z.strictObject({
    sort: z.lazy(() => SortOrderSchema),
    nulls: z.lazy(() => NullsOrderSchema).optional(),
  });

export const ProductOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ProductOrderByRelationAggregateInput> =
  z.strictObject({
    _count: z.lazy(() => SortOrderSchema).optional(),
  });

export const ProductCountOrderByAggregateInputSchema: z.ZodType<Prisma.ProductCountOrderByAggregateInput> =
  z.strictObject({
    id: z.lazy(() => SortOrderSchema).optional(),
    uuid: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    deletedAt: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    upc: z.lazy(() => SortOrderSchema).optional(),
    sku: z.lazy(() => SortOrderSchema).optional(),
    categoryId: z.lazy(() => SortOrderSchema).optional(),
    imagesId: z.lazy(() => SortOrderSchema).optional(),
    parentId: z.lazy(() => SortOrderSchema).optional(),
  });

export const ProductAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ProductAvgOrderByAggregateInput> =
  z.strictObject({
    id: z.lazy(() => SortOrderSchema).optional(),
    parentId: z.lazy(() => SortOrderSchema).optional(),
  });

export const ProductMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ProductMaxOrderByAggregateInput> =
  z.strictObject({
    id: z.lazy(() => SortOrderSchema).optional(),
    uuid: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    deletedAt: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    upc: z.lazy(() => SortOrderSchema).optional(),
    sku: z.lazy(() => SortOrderSchema).optional(),
    categoryId: z.lazy(() => SortOrderSchema).optional(),
    imagesId: z.lazy(() => SortOrderSchema).optional(),
    parentId: z.lazy(() => SortOrderSchema).optional(),
  });

export const ProductMinOrderByAggregateInputSchema: z.ZodType<Prisma.ProductMinOrderByAggregateInput> =
  z.strictObject({
    id: z.lazy(() => SortOrderSchema).optional(),
    uuid: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    deletedAt: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    upc: z.lazy(() => SortOrderSchema).optional(),
    sku: z.lazy(() => SortOrderSchema).optional(),
    categoryId: z.lazy(() => SortOrderSchema).optional(),
    imagesId: z.lazy(() => SortOrderSchema).optional(),
    parentId: z.lazy(() => SortOrderSchema).optional(),
  });

export const ProductSumOrderByAggregateInputSchema: z.ZodType<Prisma.ProductSumOrderByAggregateInput> =
  z.strictObject({
    id: z.lazy(() => SortOrderSchema).optional(),
    parentId: z.lazy(() => SortOrderSchema).optional(),
  });

export const IntWithAggregatesFilterSchema: z.ZodType<Prisma.IntWithAggregatesFilter> =
  z.strictObject({
    equals: z.number().optional(),
    in: z.number().array().optional(),
    notIn: z.number().array().optional(),
    lt: z.number().optional(),
    lte: z.number().optional(),
    gt: z.number().optional(),
    gte: z.number().optional(),
    not: z
      .union([z.number(), z.lazy(() => NestedIntWithAggregatesFilterSchema)])
      .optional(),
    _count: z.lazy(() => NestedIntFilterSchema).optional(),
    _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
    _sum: z.lazy(() => NestedIntFilterSchema).optional(),
    _min: z.lazy(() => NestedIntFilterSchema).optional(),
    _max: z.lazy(() => NestedIntFilterSchema).optional(),
  });

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> =
  z.strictObject({
    equals: z.string().optional(),
    in: z.string().array().optional(),
    notIn: z.string().array().optional(),
    lt: z.string().optional(),
    lte: z.string().optional(),
    gt: z.string().optional(),
    gte: z.string().optional(),
    contains: z.string().optional(),
    startsWith: z.string().optional(),
    endsWith: z.string().optional(),
    mode: z.lazy(() => QueryModeSchema).optional(),
    not: z
      .union([z.string(), z.lazy(() => NestedStringWithAggregatesFilterSchema)])
      .optional(),
    _count: z.lazy(() => NestedIntFilterSchema).optional(),
    _min: z.lazy(() => NestedStringFilterSchema).optional(),
    _max: z.lazy(() => NestedStringFilterSchema).optional(),
  });

export const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> =
  z.strictObject({
    equals: z.coerce.date().optional(),
    in: z.coerce.date().array().optional(),
    notIn: z.coerce.date().array().optional(),
    lt: z.coerce.date().optional(),
    lte: z.coerce.date().optional(),
    gt: z.coerce.date().optional(),
    gte: z.coerce.date().optional(),
    not: z
      .union([
        z.coerce.date(),
        z.lazy(() => NestedDateTimeWithAggregatesFilterSchema),
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterSchema).optional(),
    _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
    _max: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  });

export const DateTimeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeNullableWithAggregatesFilter> =
  z.strictObject({
    equals: z.coerce.date().optional().nullable(),
    in: z.coerce.date().array().optional().nullable(),
    notIn: z.coerce.date().array().optional().nullable(),
    lt: z.coerce.date().optional(),
    lte: z.coerce.date().optional(),
    gt: z.coerce.date().optional(),
    gte: z.coerce.date().optional(),
    not: z
      .union([
        z.coerce.date(),
        z.lazy(() => NestedDateTimeNullableWithAggregatesFilterSchema),
      ])
      .optional()
      .nullable(),
    _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
    _min: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
    _max: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
  });

export const StringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.StringNullableWithAggregatesFilter> =
  z.strictObject({
    equals: z.string().optional().nullable(),
    in: z.string().array().optional().nullable(),
    notIn: z.string().array().optional().nullable(),
    lt: z.string().optional(),
    lte: z.string().optional(),
    gt: z.string().optional(),
    gte: z.string().optional(),
    contains: z.string().optional(),
    startsWith: z.string().optional(),
    endsWith: z.string().optional(),
    mode: z.lazy(() => QueryModeSchema).optional(),
    not: z
      .union([
        z.string(),
        z.lazy(() => NestedStringNullableWithAggregatesFilterSchema),
      ])
      .optional()
      .nullable(),
    _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
    _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
    _max: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  });

export const IntNullableWithAggregatesFilterSchema: z.ZodType<Prisma.IntNullableWithAggregatesFilter> =
  z.strictObject({
    equals: z.number().optional().nullable(),
    in: z.number().array().optional().nullable(),
    notIn: z.number().array().optional().nullable(),
    lt: z.number().optional(),
    lte: z.number().optional(),
    gt: z.number().optional(),
    gte: z.number().optional(),
    not: z
      .union([
        z.number(),
        z.lazy(() => NestedIntNullableWithAggregatesFilterSchema),
      ])
      .optional()
      .nullable(),
    _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
    _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
    _sum: z.lazy(() => NestedIntNullableFilterSchema).optional(),
    _min: z.lazy(() => NestedIntNullableFilterSchema).optional(),
    _max: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  });

export const ProductCreateNestedOneWithoutVariantsInputSchema: z.ZodType<Prisma.ProductCreateNestedOneWithoutVariantsInput> =
  z.strictObject({
    create: z
      .union([
        z.lazy(() => ProductCreateWithoutVariantsInputSchema),
        z.lazy(() => ProductUncheckedCreateWithoutVariantsInputSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => ProductCreateOrConnectWithoutVariantsInputSchema)
      .optional(),
    connect: z.lazy(() => ProductWhereUniqueInputSchema).optional(),
  });

export const ProductCreateNestedManyWithoutProductInputSchema: z.ZodType<Prisma.ProductCreateNestedManyWithoutProductInput> =
  z.strictObject({
    create: z
      .union([
        z.lazy(() => ProductCreateWithoutProductInputSchema),
        z.lazy(() => ProductCreateWithoutProductInputSchema).array(),
        z.lazy(() => ProductUncheckedCreateWithoutProductInputSchema),
        z.lazy(() => ProductUncheckedCreateWithoutProductInputSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => ProductCreateOrConnectWithoutProductInputSchema),
        z.lazy(() => ProductCreateOrConnectWithoutProductInputSchema).array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => ProductCreateManyProductInputEnvelopeSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => ProductWhereUniqueInputSchema),
        z.lazy(() => ProductWhereUniqueInputSchema).array(),
      ])
      .optional(),
  });

export const ProductUncheckedCreateNestedManyWithoutProductInputSchema: z.ZodType<Prisma.ProductUncheckedCreateNestedManyWithoutProductInput> =
  z.strictObject({
    create: z
      .union([
        z.lazy(() => ProductCreateWithoutProductInputSchema),
        z.lazy(() => ProductCreateWithoutProductInputSchema).array(),
        z.lazy(() => ProductUncheckedCreateWithoutProductInputSchema),
        z.lazy(() => ProductUncheckedCreateWithoutProductInputSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => ProductCreateOrConnectWithoutProductInputSchema),
        z.lazy(() => ProductCreateOrConnectWithoutProductInputSchema).array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => ProductCreateManyProductInputEnvelopeSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => ProductWhereUniqueInputSchema),
        z.lazy(() => ProductWhereUniqueInputSchema).array(),
      ])
      .optional(),
  });

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> =
  z.strictObject({
    set: z.string().optional(),
  });

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> =
  z.strictObject({
    set: z.coerce.date().optional(),
  });

export const NullableDateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableDateTimeFieldUpdateOperationsInput> =
  z.strictObject({
    set: z.coerce.date().optional().nullable(),
  });

export const NullableStringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput> =
  z.strictObject({
    set: z.string().optional().nullable(),
  });

export const ProductUpdateOneWithoutVariantsNestedInputSchema: z.ZodType<Prisma.ProductUpdateOneWithoutVariantsNestedInput> =
  z.strictObject({
    create: z
      .union([
        z.lazy(() => ProductCreateWithoutVariantsInputSchema),
        z.lazy(() => ProductUncheckedCreateWithoutVariantsInputSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => ProductCreateOrConnectWithoutVariantsInputSchema)
      .optional(),
    upsert: z.lazy(() => ProductUpsertWithoutVariantsInputSchema).optional(),
    disconnect: z
      .union([z.boolean(), z.lazy(() => ProductWhereInputSchema)])
      .optional(),
    delete: z
      .union([z.boolean(), z.lazy(() => ProductWhereInputSchema)])
      .optional(),
    connect: z.lazy(() => ProductWhereUniqueInputSchema).optional(),
    update: z
      .union([
        z.lazy(() => ProductUpdateToOneWithWhereWithoutVariantsInputSchema),
        z.lazy(() => ProductUpdateWithoutVariantsInputSchema),
        z.lazy(() => ProductUncheckedUpdateWithoutVariantsInputSchema),
      ])
      .optional(),
  });

export const ProductUpdateManyWithoutProductNestedInputSchema: z.ZodType<Prisma.ProductUpdateManyWithoutProductNestedInput> =
  z.strictObject({
    create: z
      .union([
        z.lazy(() => ProductCreateWithoutProductInputSchema),
        z.lazy(() => ProductCreateWithoutProductInputSchema).array(),
        z.lazy(() => ProductUncheckedCreateWithoutProductInputSchema),
        z.lazy(() => ProductUncheckedCreateWithoutProductInputSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => ProductCreateOrConnectWithoutProductInputSchema),
        z.lazy(() => ProductCreateOrConnectWithoutProductInputSchema).array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => ProductUpsertWithWhereUniqueWithoutProductInputSchema),
        z
          .lazy(() => ProductUpsertWithWhereUniqueWithoutProductInputSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => ProductCreateManyProductInputEnvelopeSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => ProductWhereUniqueInputSchema),
        z.lazy(() => ProductWhereUniqueInputSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => ProductWhereUniqueInputSchema),
        z.lazy(() => ProductWhereUniqueInputSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => ProductWhereUniqueInputSchema),
        z.lazy(() => ProductWhereUniqueInputSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => ProductWhereUniqueInputSchema),
        z.lazy(() => ProductWhereUniqueInputSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => ProductUpdateWithWhereUniqueWithoutProductInputSchema),
        z
          .lazy(() => ProductUpdateWithWhereUniqueWithoutProductInputSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => ProductUpdateManyWithWhereWithoutProductInputSchema),
        z
          .lazy(() => ProductUpdateManyWithWhereWithoutProductInputSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => ProductScalarWhereInputSchema),
        z.lazy(() => ProductScalarWhereInputSchema).array(),
      ])
      .optional(),
  });

export const IntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.IntFieldUpdateOperationsInput> =
  z.strictObject({
    set: z.number().optional(),
    increment: z.number().optional(),
    decrement: z.number().optional(),
    multiply: z.number().optional(),
    divide: z.number().optional(),
  });

export const NullableIntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableIntFieldUpdateOperationsInput> =
  z.strictObject({
    set: z.number().optional().nullable(),
    increment: z.number().optional(),
    decrement: z.number().optional(),
    multiply: z.number().optional(),
    divide: z.number().optional(),
  });

export const ProductUncheckedUpdateManyWithoutProductNestedInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateManyWithoutProductNestedInput> =
  z.strictObject({
    create: z
      .union([
        z.lazy(() => ProductCreateWithoutProductInputSchema),
        z.lazy(() => ProductCreateWithoutProductInputSchema).array(),
        z.lazy(() => ProductUncheckedCreateWithoutProductInputSchema),
        z.lazy(() => ProductUncheckedCreateWithoutProductInputSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => ProductCreateOrConnectWithoutProductInputSchema),
        z.lazy(() => ProductCreateOrConnectWithoutProductInputSchema).array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => ProductUpsertWithWhereUniqueWithoutProductInputSchema),
        z
          .lazy(() => ProductUpsertWithWhereUniqueWithoutProductInputSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => ProductCreateManyProductInputEnvelopeSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => ProductWhereUniqueInputSchema),
        z.lazy(() => ProductWhereUniqueInputSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => ProductWhereUniqueInputSchema),
        z.lazy(() => ProductWhereUniqueInputSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => ProductWhereUniqueInputSchema),
        z.lazy(() => ProductWhereUniqueInputSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => ProductWhereUniqueInputSchema),
        z.lazy(() => ProductWhereUniqueInputSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => ProductUpdateWithWhereUniqueWithoutProductInputSchema),
        z
          .lazy(() => ProductUpdateWithWhereUniqueWithoutProductInputSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => ProductUpdateManyWithWhereWithoutProductInputSchema),
        z
          .lazy(() => ProductUpdateManyWithWhereWithoutProductInputSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => ProductScalarWhereInputSchema),
        z.lazy(() => ProductScalarWhereInputSchema).array(),
      ])
      .optional(),
  });

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> =
  z.strictObject({
    equals: z.number().optional(),
    in: z.number().array().optional(),
    notIn: z.number().array().optional(),
    lt: z.number().optional(),
    lte: z.number().optional(),
    gt: z.number().optional(),
    gte: z.number().optional(),
    not: z.union([z.number(), z.lazy(() => NestedIntFilterSchema)]).optional(),
  });

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> =
  z.strictObject({
    equals: z.string().optional(),
    in: z.string().array().optional(),
    notIn: z.string().array().optional(),
    lt: z.string().optional(),
    lte: z.string().optional(),
    gt: z.string().optional(),
    gte: z.string().optional(),
    contains: z.string().optional(),
    startsWith: z.string().optional(),
    endsWith: z.string().optional(),
    not: z
      .union([z.string(), z.lazy(() => NestedStringFilterSchema)])
      .optional(),
  });

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> =
  z.strictObject({
    equals: z.coerce.date().optional(),
    in: z.coerce.date().array().optional(),
    notIn: z.coerce.date().array().optional(),
    lt: z.coerce.date().optional(),
    lte: z.coerce.date().optional(),
    gt: z.coerce.date().optional(),
    gte: z.coerce.date().optional(),
    not: z
      .union([z.coerce.date(), z.lazy(() => NestedDateTimeFilterSchema)])
      .optional(),
  });

export const NestedDateTimeNullableFilterSchema: z.ZodType<Prisma.NestedDateTimeNullableFilter> =
  z.strictObject({
    equals: z.coerce.date().optional().nullable(),
    in: z.coerce.date().array().optional().nullable(),
    notIn: z.coerce.date().array().optional().nullable(),
    lt: z.coerce.date().optional(),
    lte: z.coerce.date().optional(),
    gt: z.coerce.date().optional(),
    gte: z.coerce.date().optional(),
    not: z
      .union([
        z.coerce.date(),
        z.lazy(() => NestedDateTimeNullableFilterSchema),
      ])
      .optional()
      .nullable(),
  });

export const NestedStringNullableFilterSchema: z.ZodType<Prisma.NestedStringNullableFilter> =
  z.strictObject({
    equals: z.string().optional().nullable(),
    in: z.string().array().optional().nullable(),
    notIn: z.string().array().optional().nullable(),
    lt: z.string().optional(),
    lte: z.string().optional(),
    gt: z.string().optional(),
    gte: z.string().optional(),
    contains: z.string().optional(),
    startsWith: z.string().optional(),
    endsWith: z.string().optional(),
    not: z
      .union([z.string(), z.lazy(() => NestedStringNullableFilterSchema)])
      .optional()
      .nullable(),
  });

export const NestedIntNullableFilterSchema: z.ZodType<Prisma.NestedIntNullableFilter> =
  z.strictObject({
    equals: z.number().optional().nullable(),
    in: z.number().array().optional().nullable(),
    notIn: z.number().array().optional().nullable(),
    lt: z.number().optional(),
    lte: z.number().optional(),
    gt: z.number().optional(),
    gte: z.number().optional(),
    not: z
      .union([z.number(), z.lazy(() => NestedIntNullableFilterSchema)])
      .optional()
      .nullable(),
  });

export const NestedIntWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntWithAggregatesFilter> =
  z.strictObject({
    equals: z.number().optional(),
    in: z.number().array().optional(),
    notIn: z.number().array().optional(),
    lt: z.number().optional(),
    lte: z.number().optional(),
    gt: z.number().optional(),
    gte: z.number().optional(),
    not: z
      .union([z.number(), z.lazy(() => NestedIntWithAggregatesFilterSchema)])
      .optional(),
    _count: z.lazy(() => NestedIntFilterSchema).optional(),
    _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
    _sum: z.lazy(() => NestedIntFilterSchema).optional(),
    _min: z.lazy(() => NestedIntFilterSchema).optional(),
    _max: z.lazy(() => NestedIntFilterSchema).optional(),
  });

export const NestedFloatFilterSchema: z.ZodType<Prisma.NestedFloatFilter> =
  z.strictObject({
    equals: z.number().optional(),
    in: z.number().array().optional(),
    notIn: z.number().array().optional(),
    lt: z.number().optional(),
    lte: z.number().optional(),
    gt: z.number().optional(),
    gte: z.number().optional(),
    not: z
      .union([z.number(), z.lazy(() => NestedFloatFilterSchema)])
      .optional(),
  });

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> =
  z.strictObject({
    equals: z.string().optional(),
    in: z.string().array().optional(),
    notIn: z.string().array().optional(),
    lt: z.string().optional(),
    lte: z.string().optional(),
    gt: z.string().optional(),
    gte: z.string().optional(),
    contains: z.string().optional(),
    startsWith: z.string().optional(),
    endsWith: z.string().optional(),
    not: z
      .union([z.string(), z.lazy(() => NestedStringWithAggregatesFilterSchema)])
      .optional(),
    _count: z.lazy(() => NestedIntFilterSchema).optional(),
    _min: z.lazy(() => NestedStringFilterSchema).optional(),
    _max: z.lazy(() => NestedStringFilterSchema).optional(),
  });

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> =
  z.strictObject({
    equals: z.coerce.date().optional(),
    in: z.coerce.date().array().optional(),
    notIn: z.coerce.date().array().optional(),
    lt: z.coerce.date().optional(),
    lte: z.coerce.date().optional(),
    gt: z.coerce.date().optional(),
    gte: z.coerce.date().optional(),
    not: z
      .union([
        z.coerce.date(),
        z.lazy(() => NestedDateTimeWithAggregatesFilterSchema),
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterSchema).optional(),
    _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
    _max: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  });

export const NestedDateTimeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeNullableWithAggregatesFilter> =
  z.strictObject({
    equals: z.coerce.date().optional().nullable(),
    in: z.coerce.date().array().optional().nullable(),
    notIn: z.coerce.date().array().optional().nullable(),
    lt: z.coerce.date().optional(),
    lte: z.coerce.date().optional(),
    gt: z.coerce.date().optional(),
    gte: z.coerce.date().optional(),
    not: z
      .union([
        z.coerce.date(),
        z.lazy(() => NestedDateTimeNullableWithAggregatesFilterSchema),
      ])
      .optional()
      .nullable(),
    _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
    _min: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
    _max: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
  });

export const NestedStringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringNullableWithAggregatesFilter> =
  z.strictObject({
    equals: z.string().optional().nullable(),
    in: z.string().array().optional().nullable(),
    notIn: z.string().array().optional().nullable(),
    lt: z.string().optional(),
    lte: z.string().optional(),
    gt: z.string().optional(),
    gte: z.string().optional(),
    contains: z.string().optional(),
    startsWith: z.string().optional(),
    endsWith: z.string().optional(),
    not: z
      .union([
        z.string(),
        z.lazy(() => NestedStringNullableWithAggregatesFilterSchema),
      ])
      .optional()
      .nullable(),
    _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
    _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
    _max: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  });

export const NestedIntNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntNullableWithAggregatesFilter> =
  z.strictObject({
    equals: z.number().optional().nullable(),
    in: z.number().array().optional().nullable(),
    notIn: z.number().array().optional().nullable(),
    lt: z.number().optional(),
    lte: z.number().optional(),
    gt: z.number().optional(),
    gte: z.number().optional(),
    not: z
      .union([
        z.number(),
        z.lazy(() => NestedIntNullableWithAggregatesFilterSchema),
      ])
      .optional()
      .nullable(),
    _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
    _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
    _sum: z.lazy(() => NestedIntNullableFilterSchema).optional(),
    _min: z.lazy(() => NestedIntNullableFilterSchema).optional(),
    _max: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  });

export const NestedFloatNullableFilterSchema: z.ZodType<Prisma.NestedFloatNullableFilter> =
  z.strictObject({
    equals: z.number().optional().nullable(),
    in: z.number().array().optional().nullable(),
    notIn: z.number().array().optional().nullable(),
    lt: z.number().optional(),
    lte: z.number().optional(),
    gt: z.number().optional(),
    gte: z.number().optional(),
    not: z
      .union([z.number(), z.lazy(() => NestedFloatNullableFilterSchema)])
      .optional()
      .nullable(),
  });

export const ProductCreateWithoutVariantsInputSchema: z.ZodType<Prisma.ProductCreateWithoutVariantsInput> =
  z.strictObject({
    uuid: z.uuid().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    deletedAt: z.coerce.date().optional().nullable(),
    name: z.string(),
    description: z.string().optional().nullable(),
    upc: z.string(),
    sku: z.string(),
    categoryId: z.string().optional().nullable(),
    imagesId: z.string().optional().nullable(),
    product: z
      .lazy(() => ProductCreateNestedOneWithoutVariantsInputSchema)
      .optional(),
  });

export const ProductUncheckedCreateWithoutVariantsInputSchema: z.ZodType<Prisma.ProductUncheckedCreateWithoutVariantsInput> =
  z.strictObject({
    id: z.number().int().optional(),
    uuid: z.uuid().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    deletedAt: z.coerce.date().optional().nullable(),
    name: z.string(),
    description: z.string().optional().nullable(),
    upc: z.string(),
    sku: z.string(),
    categoryId: z.string().optional().nullable(),
    imagesId: z.string().optional().nullable(),
    parentId: z.number().int().optional().nullable(),
  });

export const ProductCreateOrConnectWithoutVariantsInputSchema: z.ZodType<Prisma.ProductCreateOrConnectWithoutVariantsInput> =
  z.strictObject({
    where: z.lazy(() => ProductWhereUniqueInputSchema),
    create: z.union([
      z.lazy(() => ProductCreateWithoutVariantsInputSchema),
      z.lazy(() => ProductUncheckedCreateWithoutVariantsInputSchema),
    ]),
  });

export const ProductCreateWithoutProductInputSchema: z.ZodType<Prisma.ProductCreateWithoutProductInput> =
  z.strictObject({
    uuid: z.uuid().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    deletedAt: z.coerce.date().optional().nullable(),
    name: z.string(),
    description: z.string().optional().nullable(),
    upc: z.string(),
    sku: z.string(),
    categoryId: z.string().optional().nullable(),
    imagesId: z.string().optional().nullable(),
    variants: z
      .lazy(() => ProductCreateNestedManyWithoutProductInputSchema)
      .optional(),
  });

export const ProductUncheckedCreateWithoutProductInputSchema: z.ZodType<Prisma.ProductUncheckedCreateWithoutProductInput> =
  z.strictObject({
    id: z.number().int().optional(),
    uuid: z.uuid().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    deletedAt: z.coerce.date().optional().nullable(),
    name: z.string(),
    description: z.string().optional().nullable(),
    upc: z.string(),
    sku: z.string(),
    categoryId: z.string().optional().nullable(),
    imagesId: z.string().optional().nullable(),
    variants: z
      .lazy(() => ProductUncheckedCreateNestedManyWithoutProductInputSchema)
      .optional(),
  });

export const ProductCreateOrConnectWithoutProductInputSchema: z.ZodType<Prisma.ProductCreateOrConnectWithoutProductInput> =
  z.strictObject({
    where: z.lazy(() => ProductWhereUniqueInputSchema),
    create: z.union([
      z.lazy(() => ProductCreateWithoutProductInputSchema),
      z.lazy(() => ProductUncheckedCreateWithoutProductInputSchema),
    ]),
  });

export const ProductCreateManyProductInputEnvelopeSchema: z.ZodType<Prisma.ProductCreateManyProductInputEnvelope> =
  z.strictObject({
    data: z.union([
      z.lazy(() => ProductCreateManyProductInputSchema),
      z.lazy(() => ProductCreateManyProductInputSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  });

export const ProductUpsertWithoutVariantsInputSchema: z.ZodType<Prisma.ProductUpsertWithoutVariantsInput> =
  z.strictObject({
    update: z.union([
      z.lazy(() => ProductUpdateWithoutVariantsInputSchema),
      z.lazy(() => ProductUncheckedUpdateWithoutVariantsInputSchema),
    ]),
    create: z.union([
      z.lazy(() => ProductCreateWithoutVariantsInputSchema),
      z.lazy(() => ProductUncheckedCreateWithoutVariantsInputSchema),
    ]),
    where: z.lazy(() => ProductWhereInputSchema).optional(),
  });

export const ProductUpdateToOneWithWhereWithoutVariantsInputSchema: z.ZodType<Prisma.ProductUpdateToOneWithWhereWithoutVariantsInput> =
  z.strictObject({
    where: z.lazy(() => ProductWhereInputSchema).optional(),
    data: z.union([
      z.lazy(() => ProductUpdateWithoutVariantsInputSchema),
      z.lazy(() => ProductUncheckedUpdateWithoutVariantsInputSchema),
    ]),
  });

export const ProductUpdateWithoutVariantsInputSchema: z.ZodType<Prisma.ProductUpdateWithoutVariantsInput> =
  z.strictObject({
    uuid: z
      .union([z.uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    deletedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    name: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    description: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    upc: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    sku: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    categoryId: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    imagesId: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    product: z
      .lazy(() => ProductUpdateOneWithoutVariantsNestedInputSchema)
      .optional(),
  });

export const ProductUncheckedUpdateWithoutVariantsInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateWithoutVariantsInput> =
  z.strictObject({
    id: z
      .union([
        z.number().int(),
        z.lazy(() => IntFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    uuid: z
      .union([z.uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    deletedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    name: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    description: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    upc: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    sku: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    categoryId: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    imagesId: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    parentId: z
      .union([
        z.number().int(),
        z.lazy(() => NullableIntFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
  });

export const ProductUpsertWithWhereUniqueWithoutProductInputSchema: z.ZodType<Prisma.ProductUpsertWithWhereUniqueWithoutProductInput> =
  z.strictObject({
    where: z.lazy(() => ProductWhereUniqueInputSchema),
    update: z.union([
      z.lazy(() => ProductUpdateWithoutProductInputSchema),
      z.lazy(() => ProductUncheckedUpdateWithoutProductInputSchema),
    ]),
    create: z.union([
      z.lazy(() => ProductCreateWithoutProductInputSchema),
      z.lazy(() => ProductUncheckedCreateWithoutProductInputSchema),
    ]),
  });

export const ProductUpdateWithWhereUniqueWithoutProductInputSchema: z.ZodType<Prisma.ProductUpdateWithWhereUniqueWithoutProductInput> =
  z.strictObject({
    where: z.lazy(() => ProductWhereUniqueInputSchema),
    data: z.union([
      z.lazy(() => ProductUpdateWithoutProductInputSchema),
      z.lazy(() => ProductUncheckedUpdateWithoutProductInputSchema),
    ]),
  });

export const ProductUpdateManyWithWhereWithoutProductInputSchema: z.ZodType<Prisma.ProductUpdateManyWithWhereWithoutProductInput> =
  z.strictObject({
    where: z.lazy(() => ProductScalarWhereInputSchema),
    data: z.union([
      z.lazy(() => ProductUpdateManyMutationInputSchema),
      z.lazy(() => ProductUncheckedUpdateManyWithoutProductInputSchema),
    ]),
  });

export const ProductScalarWhereInputSchema: z.ZodType<Prisma.ProductScalarWhereInput> =
  z.strictObject({
    AND: z
      .union([
        z.lazy(() => ProductScalarWhereInputSchema),
        z.lazy(() => ProductScalarWhereInputSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ProductScalarWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ProductScalarWhereInputSchema),
        z.lazy(() => ProductScalarWhereInputSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
    uuid: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
      .optional(),
    deletedAt: z
      .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
      .optional()
      .nullable(),
    name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    description: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    upc: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    sku: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    categoryId: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    imagesId: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    parentId: z
      .union([z.lazy(() => IntNullableFilterSchema), z.number()])
      .optional()
      .nullable(),
  });

export const ProductCreateManyProductInputSchema: z.ZodType<Prisma.ProductCreateManyProductInput> =
  z.strictObject({
    id: z.number().int().optional(),
    uuid: z.uuid().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    deletedAt: z.coerce.date().optional().nullable(),
    name: z.string(),
    description: z.string().optional().nullable(),
    upc: z.string(),
    sku: z.string(),
    categoryId: z.string().optional().nullable(),
    imagesId: z.string().optional().nullable(),
  });

export const ProductUpdateWithoutProductInputSchema: z.ZodType<Prisma.ProductUpdateWithoutProductInput> =
  z.strictObject({
    uuid: z
      .union([z.uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    deletedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    name: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    description: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    upc: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    sku: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    categoryId: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    imagesId: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    variants: z
      .lazy(() => ProductUpdateManyWithoutProductNestedInputSchema)
      .optional(),
  });

export const ProductUncheckedUpdateWithoutProductInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateWithoutProductInput> =
  z.strictObject({
    id: z
      .union([
        z.number().int(),
        z.lazy(() => IntFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    uuid: z
      .union([z.uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    deletedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    name: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    description: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    upc: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    sku: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    categoryId: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    imagesId: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    variants: z
      .lazy(() => ProductUncheckedUpdateManyWithoutProductNestedInputSchema)
      .optional(),
  });

export const ProductUncheckedUpdateManyWithoutProductInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateManyWithoutProductInput> =
  z.strictObject({
    id: z
      .union([
        z.number().int(),
        z.lazy(() => IntFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    uuid: z
      .union([z.uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    deletedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    name: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    description: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    upc: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    sku: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    categoryId: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    imagesId: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
  });

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const ProductFindFirstArgsSchema: z.ZodType<Prisma.ProductFindFirstArgs> =
  z
    .object({
      select: ProductSelectSchema.optional(),
      include: ProductIncludeSchema.optional(),
      where: ProductWhereInputSchema.optional(),
      orderBy: z
        .union([
          ProductOrderByWithRelationInputSchema.array(),
          ProductOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: ProductWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          ProductScalarFieldEnumSchema,
          ProductScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const ProductFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ProductFindFirstOrThrowArgs> =
  z
    .object({
      select: ProductSelectSchema.optional(),
      include: ProductIncludeSchema.optional(),
      where: ProductWhereInputSchema.optional(),
      orderBy: z
        .union([
          ProductOrderByWithRelationInputSchema.array(),
          ProductOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: ProductWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          ProductScalarFieldEnumSchema,
          ProductScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const ProductFindManyArgsSchema: z.ZodType<Prisma.ProductFindManyArgs> =
  z
    .object({
      select: ProductSelectSchema.optional(),
      include: ProductIncludeSchema.optional(),
      where: ProductWhereInputSchema.optional(),
      orderBy: z
        .union([
          ProductOrderByWithRelationInputSchema.array(),
          ProductOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: ProductWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          ProductScalarFieldEnumSchema,
          ProductScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const ProductAggregateArgsSchema: z.ZodType<Prisma.ProductAggregateArgs> =
  z
    .object({
      where: ProductWhereInputSchema.optional(),
      orderBy: z
        .union([
          ProductOrderByWithRelationInputSchema.array(),
          ProductOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: ProductWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict();

export const ProductGroupByArgsSchema: z.ZodType<Prisma.ProductGroupByArgs> = z
  .object({
    where: ProductWhereInputSchema.optional(),
    orderBy: z
      .union([
        ProductOrderByWithAggregationInputSchema.array(),
        ProductOrderByWithAggregationInputSchema,
      ])
      .optional(),
    by: ProductScalarFieldEnumSchema.array(),
    having: ProductScalarWhereWithAggregatesInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .strict();

export const ProductFindUniqueArgsSchema: z.ZodType<Prisma.ProductFindUniqueArgs> =
  z
    .object({
      select: ProductSelectSchema.optional(),
      include: ProductIncludeSchema.optional(),
      where: ProductWhereUniqueInputSchema,
    })
    .strict();

export const ProductFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ProductFindUniqueOrThrowArgs> =
  z
    .object({
      select: ProductSelectSchema.optional(),
      include: ProductIncludeSchema.optional(),
      where: ProductWhereUniqueInputSchema,
    })
    .strict();

export const ProductCreateArgsSchema: z.ZodType<Prisma.ProductCreateArgs> = z
  .object({
    select: ProductSelectSchema.optional(),
    include: ProductIncludeSchema.optional(),
    data: z.union([
      ProductCreateInputSchema,
      ProductUncheckedCreateInputSchema,
    ]),
  })
  .strict();

export const ProductUpsertArgsSchema: z.ZodType<Prisma.ProductUpsertArgs> = z
  .object({
    select: ProductSelectSchema.optional(),
    include: ProductIncludeSchema.optional(),
    where: ProductWhereUniqueInputSchema,
    create: z.union([
      ProductCreateInputSchema,
      ProductUncheckedCreateInputSchema,
    ]),
    update: z.union([
      ProductUpdateInputSchema,
      ProductUncheckedUpdateInputSchema,
    ]),
  })
  .strict();

export const ProductCreateManyArgsSchema: z.ZodType<Prisma.ProductCreateManyArgs> =
  z
    .object({
      data: z.union([
        ProductCreateManyInputSchema,
        ProductCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const ProductCreateManyAndReturnArgsSchema: z.ZodType<Prisma.ProductCreateManyAndReturnArgs> =
  z
    .object({
      data: z.union([
        ProductCreateManyInputSchema,
        ProductCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const ProductDeleteArgsSchema: z.ZodType<Prisma.ProductDeleteArgs> = z
  .object({
    select: ProductSelectSchema.optional(),
    include: ProductIncludeSchema.optional(),
    where: ProductWhereUniqueInputSchema,
  })
  .strict();

export const ProductUpdateArgsSchema: z.ZodType<Prisma.ProductUpdateArgs> = z
  .object({
    select: ProductSelectSchema.optional(),
    include: ProductIncludeSchema.optional(),
    data: z.union([
      ProductUpdateInputSchema,
      ProductUncheckedUpdateInputSchema,
    ]),
    where: ProductWhereUniqueInputSchema,
  })
  .strict();

export const ProductUpdateManyArgsSchema: z.ZodType<Prisma.ProductUpdateManyArgs> =
  z
    .object({
      data: z.union([
        ProductUpdateManyMutationInputSchema,
        ProductUncheckedUpdateManyInputSchema,
      ]),
      where: ProductWhereInputSchema.optional(),
      limit: z.number().optional(),
    })
    .strict();

export const ProductUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.ProductUpdateManyAndReturnArgs> =
  z
    .object({
      data: z.union([
        ProductUpdateManyMutationInputSchema,
        ProductUncheckedUpdateManyInputSchema,
      ]),
      where: ProductWhereInputSchema.optional(),
      limit: z.number().optional(),
    })
    .strict();

export const ProductDeleteManyArgsSchema: z.ZodType<Prisma.ProductDeleteManyArgs> =
  z
    .object({
      where: ProductWhereInputSchema.optional(),
      limit: z.number().optional(),
    })
    .strict();
