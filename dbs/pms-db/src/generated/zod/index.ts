import { z } from 'zod';
import type { Prisma } from '../prisma/client.js';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted','ReadCommitted','RepeatableRead','Serializable']);

export const SampleScalarFieldEnumSchema = z.enum(['id','uuid','createdAt','updatedAt','deletedAt','name']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const QueryModeSchema = z.enum(['default','insensitive']);

export const NullsOrderSchema = z.enum(['first','last']);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// SAMPLE SCHEMA
/////////////////////////////////////////

export const SampleSchema = z.object({
  id: z.number().int(),
  uuid: z.uuid(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  deletedAt: z.coerce.date().nullable(),
  name: z.string(),
})

export type Sample = z.infer<typeof SampleSchema>

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// SAMPLE
//------------------------------------------------------

export const SampleSelectSchema: z.ZodType<Prisma.SampleSelect> = z.object({
  id: z.boolean().optional(),
  uuid: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  deletedAt: z.boolean().optional(),
  name: z.boolean().optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const SampleWhereInputSchema: z.ZodType<Prisma.SampleWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => SampleWhereInputSchema), z.lazy(() => SampleWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SampleWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SampleWhereInputSchema), z.lazy(() => SampleWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  uuid: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  deletedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date() ]).optional().nullable(),
  name: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
});

export const SampleOrderByWithRelationInputSchema: z.ZodType<Prisma.SampleOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  uuid: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
});

export const SampleWhereUniqueInputSchema: z.ZodType<Prisma.SampleWhereUniqueInput> = z.union([
  z.object({
    id: z.number().int(),
    uuid: z.uuid(),
    name: z.string(),
  }),
  z.object({
    id: z.number().int(),
    uuid: z.uuid(),
  }),
  z.object({
    id: z.number().int(),
    name: z.string(),
  }),
  z.object({
    id: z.number().int(),
  }),
  z.object({
    uuid: z.uuid(),
    name: z.string(),
  }),
  z.object({
    uuid: z.uuid(),
  }),
  z.object({
    name: z.string(),
  }),
])
.and(z.strictObject({
  id: z.number().int().optional(),
  uuid: z.uuid().optional(),
  name: z.string().optional(),
  AND: z.union([ z.lazy(() => SampleWhereInputSchema), z.lazy(() => SampleWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SampleWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SampleWhereInputSchema), z.lazy(() => SampleWhereInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  deletedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date() ]).optional().nullable(),
}));

export const SampleOrderByWithAggregationInputSchema: z.ZodType<Prisma.SampleOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  uuid: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => SampleCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => SampleAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => SampleMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => SampleMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => SampleSumOrderByAggregateInputSchema).optional(),
});

export const SampleScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.SampleScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => SampleScalarWhereWithAggregatesInputSchema), z.lazy(() => SampleScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => SampleScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SampleScalarWhereWithAggregatesInputSchema), z.lazy(() => SampleScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema), z.number() ]).optional(),
  uuid: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
  deletedAt: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema), z.coerce.date() ]).optional().nullable(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
});

export const SampleCreateInputSchema: z.ZodType<Prisma.SampleCreateInput> = z.strictObject({
  uuid: z.uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  name: z.string(),
});

export const SampleUncheckedCreateInputSchema: z.ZodType<Prisma.SampleUncheckedCreateInput> = z.strictObject({
  id: z.number().int().optional(),
  uuid: z.uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  name: z.string(),
});

export const SampleUpdateInputSchema: z.ZodType<Prisma.SampleUpdateInput> = z.strictObject({
  uuid: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
});

export const SampleUncheckedUpdateInputSchema: z.ZodType<Prisma.SampleUncheckedUpdateInput> = z.strictObject({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  uuid: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
});

export const SampleCreateManyInputSchema: z.ZodType<Prisma.SampleCreateManyInput> = z.strictObject({
  id: z.number().int().optional(),
  uuid: z.uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  name: z.string(),
});

export const SampleUpdateManyMutationInputSchema: z.ZodType<Prisma.SampleUpdateManyMutationInput> = z.strictObject({
  uuid: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
});

export const SampleUncheckedUpdateManyInputSchema: z.ZodType<Prisma.SampleUncheckedUpdateManyInput> = z.strictObject({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  uuid: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
});

export const IntFilterSchema: z.ZodType<Prisma.IntFilter> = z.strictObject({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
});

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z.strictObject({
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
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
});

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> = z.strictObject({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
});

export const DateTimeNullableFilterSchema: z.ZodType<Prisma.DateTimeNullableFilter> = z.strictObject({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableFilterSchema) ]).optional().nullable(),
});

export const SortOrderInputSchema: z.ZodType<Prisma.SortOrderInput> = z.strictObject({
  sort: z.lazy(() => SortOrderSchema),
  nulls: z.lazy(() => NullsOrderSchema).optional(),
});

export const SampleCountOrderByAggregateInputSchema: z.ZodType<Prisma.SampleCountOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  uuid: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
});

export const SampleAvgOrderByAggregateInputSchema: z.ZodType<Prisma.SampleAvgOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
});

export const SampleMaxOrderByAggregateInputSchema: z.ZodType<Prisma.SampleMaxOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  uuid: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
});

export const SampleMinOrderByAggregateInputSchema: z.ZodType<Prisma.SampleMinOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  uuid: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
});

export const SampleSumOrderByAggregateInputSchema: z.ZodType<Prisma.SampleSumOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
});

export const IntWithAggregatesFilterSchema: z.ZodType<Prisma.IntWithAggregatesFilter> = z.strictObject({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional(),
});

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.strictObject({
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
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional(),
});

export const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> = z.strictObject({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional(),
});

export const DateTimeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeNullableWithAggregatesFilter> = z.strictObject({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
});

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.strictObject({
  set: z.string().optional(),
});

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> = z.strictObject({
  set: z.coerce.date().optional(),
});

export const NullableDateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableDateTimeFieldUpdateOperationsInput> = z.strictObject({
  set: z.coerce.date().optional().nullable(),
});

export const IntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.IntFieldUpdateOperationsInput> = z.strictObject({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional(),
});

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.strictObject({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
});

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.strictObject({
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
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
});

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> = z.strictObject({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
});

export const NestedDateTimeNullableFilterSchema: z.ZodType<Prisma.NestedDateTimeNullableFilter> = z.strictObject({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableFilterSchema) ]).optional().nullable(),
});

export const NestedIntWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntWithAggregatesFilter> = z.strictObject({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional(),
});

export const NestedFloatFilterSchema: z.ZodType<Prisma.NestedFloatFilter> = z.strictObject({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatFilterSchema) ]).optional(),
});

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z.strictObject({
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
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional(),
});

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> = z.strictObject({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional(),
});

export const NestedDateTimeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeNullableWithAggregatesFilter> = z.strictObject({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
});

export const NestedIntNullableFilterSchema: z.ZodType<Prisma.NestedIntNullableFilter> = z.strictObject({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
});

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const SampleFindFirstArgsSchema: z.ZodType<Prisma.SampleFindFirstArgs> = z.object({
  select: SampleSelectSchema.optional(),
  where: SampleWhereInputSchema.optional(), 
  orderBy: z.union([ SampleOrderByWithRelationInputSchema.array(), SampleOrderByWithRelationInputSchema ]).optional(),
  cursor: SampleWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SampleScalarFieldEnumSchema, SampleScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const SampleFindFirstOrThrowArgsSchema: z.ZodType<Prisma.SampleFindFirstOrThrowArgs> = z.object({
  select: SampleSelectSchema.optional(),
  where: SampleWhereInputSchema.optional(), 
  orderBy: z.union([ SampleOrderByWithRelationInputSchema.array(), SampleOrderByWithRelationInputSchema ]).optional(),
  cursor: SampleWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SampleScalarFieldEnumSchema, SampleScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const SampleFindManyArgsSchema: z.ZodType<Prisma.SampleFindManyArgs> = z.object({
  select: SampleSelectSchema.optional(),
  where: SampleWhereInputSchema.optional(), 
  orderBy: z.union([ SampleOrderByWithRelationInputSchema.array(), SampleOrderByWithRelationInputSchema ]).optional(),
  cursor: SampleWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SampleScalarFieldEnumSchema, SampleScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const SampleAggregateArgsSchema: z.ZodType<Prisma.SampleAggregateArgs> = z.object({
  where: SampleWhereInputSchema.optional(), 
  orderBy: z.union([ SampleOrderByWithRelationInputSchema.array(), SampleOrderByWithRelationInputSchema ]).optional(),
  cursor: SampleWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const SampleGroupByArgsSchema: z.ZodType<Prisma.SampleGroupByArgs> = z.object({
  where: SampleWhereInputSchema.optional(), 
  orderBy: z.union([ SampleOrderByWithAggregationInputSchema.array(), SampleOrderByWithAggregationInputSchema ]).optional(),
  by: SampleScalarFieldEnumSchema.array(), 
  having: SampleScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const SampleFindUniqueArgsSchema: z.ZodType<Prisma.SampleFindUniqueArgs> = z.object({
  select: SampleSelectSchema.optional(),
  where: SampleWhereUniqueInputSchema, 
}).strict();

export const SampleFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.SampleFindUniqueOrThrowArgs> = z.object({
  select: SampleSelectSchema.optional(),
  where: SampleWhereUniqueInputSchema, 
}).strict();

export const SampleCreateArgsSchema: z.ZodType<Prisma.SampleCreateArgs> = z.object({
  select: SampleSelectSchema.optional(),
  data: z.union([ SampleCreateInputSchema, SampleUncheckedCreateInputSchema ]),
}).strict();

export const SampleUpsertArgsSchema: z.ZodType<Prisma.SampleUpsertArgs> = z.object({
  select: SampleSelectSchema.optional(),
  where: SampleWhereUniqueInputSchema, 
  create: z.union([ SampleCreateInputSchema, SampleUncheckedCreateInputSchema ]),
  update: z.union([ SampleUpdateInputSchema, SampleUncheckedUpdateInputSchema ]),
}).strict();

export const SampleCreateManyArgsSchema: z.ZodType<Prisma.SampleCreateManyArgs> = z.object({
  data: z.union([ SampleCreateManyInputSchema, SampleCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const SampleCreateManyAndReturnArgsSchema: z.ZodType<Prisma.SampleCreateManyAndReturnArgs> = z.object({
  data: z.union([ SampleCreateManyInputSchema, SampleCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const SampleDeleteArgsSchema: z.ZodType<Prisma.SampleDeleteArgs> = z.object({
  select: SampleSelectSchema.optional(),
  where: SampleWhereUniqueInputSchema, 
}).strict();

export const SampleUpdateArgsSchema: z.ZodType<Prisma.SampleUpdateArgs> = z.object({
  select: SampleSelectSchema.optional(),
  data: z.union([ SampleUpdateInputSchema, SampleUncheckedUpdateInputSchema ]),
  where: SampleWhereUniqueInputSchema, 
}).strict();

export const SampleUpdateManyArgsSchema: z.ZodType<Prisma.SampleUpdateManyArgs> = z.object({
  data: z.union([ SampleUpdateManyMutationInputSchema, SampleUncheckedUpdateManyInputSchema ]),
  where: SampleWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const SampleUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.SampleUpdateManyAndReturnArgs> = z.object({
  data: z.union([ SampleUpdateManyMutationInputSchema, SampleUncheckedUpdateManyInputSchema ]),
  where: SampleWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const SampleDeleteManyArgsSchema: z.ZodType<Prisma.SampleDeleteManyArgs> = z.object({
  where: SampleWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();