export const nameSuffixes = {
  Create: 'Create',
  Update: 'Update',
  Select: 'Select',
  Omit: 'Omit',
  Include: 'Include',
  Field: 'Field',
  Enum: 'Enum',
  Where: 'Where',
  Order: 'Order',
  //
  OwnCreate: 'OwnCreate',
  OwnUpdate: 'OwnUpdate',
  OwnSelect: 'OwnSelect',
  OwnOmit: 'OwnOmit',
  OwnWhere: 'OwnWhere',
  OwnOrder: 'OwnOrder',

  //
  RelationCreate: 'RelationCreate',
  RelationManyCreate: 'RelationManyCreate',
  RelationUpdate: 'RelationUpdate',
  RelationManyUpdate: 'RelationManyUpdate',

  RelationSelect: 'RelationSelect',
  RelationInclude: 'RelationInclude',
};

export type NameSuffixes = typeof nameSuffixes;
