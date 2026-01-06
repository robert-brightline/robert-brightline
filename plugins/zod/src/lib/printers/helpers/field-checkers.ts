import type { DMMF } from '@prisma/generator-helper';

export function isTimestampField(field: DMMF.Field) {
  return ['createdAt', 'updatedAt', 'deletedAt'].includes(field.name);
}

export function isHidden(field: DMMF.Field) {
  return field.documentation?.match(/@hidden/);
}

export function isIdField(field: DMMF.Field) {
  return field.name === 'id';
}

export function isGenerated(field: DMMF.Field) {
  if ((field.default as DMMF.FieldDefault)?.name) {
    return true;
  }
  return false;
}

export function isReadonlyField(field: DMMF.Field) {
  return field.documentation?.match(/@readonly/);
}

export function isWriteonly(field: DMMF.Field) {
  return field.documentation?.match(/@writeonly/);
}

export function isRelationField(field: DMMF.Field) {
  return field.relationName != undefined;
}

export function isRelationKey(field: DMMF.Field) {
  return field.isReadOnly == true;
}

export function isInputField(field: DMMF.Field) {
  if (
    isTimestampField(field) ||
    isHidden(field) ||
    isIdField(field) ||
    isRelationKey(field) ||
    isGenerated(field)
  ) {
    return false;
  }

  return true;
}

export function isOwnInputField(field: DMMF.Field) {
  return isInputField(field) && !isRelationField(field);
}

export function isOwnField(field: DMMF.Field) {
  return field.relationName == undefined;
}

export function isQueryField(field: DMMF.Field) {
  if (isHidden(field)) {
    return false;
  }

  return true;
}

export function isOwnQueryField(field: DMMF.Field) {
  if (isOwnField(field)) {
    return isQueryField(field);
  }

  return false;
}
