export const nameSuffixes = {
  Create: 'Create',
  Update: 'Update',
  Projection: 'Projection',

  Field: 'Field',
  Enum: 'Enum',
  Where: 'Where',
  Order: 'Order',

  // Prisma filter for the enum tyeps
  EnumFilter: 'EnumFilter',
  EnumArrayFilter: 'EnumArrayFilter',

  //
  OwnCreate: 'OwnCreate',
  OwnUpdate: 'OwnUpdate',
  OwnProjection: 'OwnProjection',
  OwnWhere: 'OwnWhere',
  OwnOrder: 'OwnOrder',

  //
  RelationCreate: 'RelationCreate',
  RelationManyCreate: 'RelationManyCreate',

  RelationUpdate: 'RelationUpdate',
  RelationManyUpdate: 'RelationManyUpdate',

  RelationProjection: 'RelationProjection',
  RelationManyProjection: 'RelationManyProjection',

  RelationManyWhere: 'RelationManyWhere',
};

export type NameSuffixes = typeof nameSuffixes;
