import type { DMMF } from '@prisma/generator-helper';

export function isTimestampField(field: DMMF.Field) {
  return ['createdAt', 'updatedAt', 'deletedAt'].includes(field.name);
}

export function isIdField(field: DMMF.Field) {
  return ['id'].includes(field.name);
}

export function isInternalField(field: DMMF.Field) {
  return field.documentation?.match(/@internal/);
}

export function isReadonly(field: DMMF.Field) {
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
    isInternalField(field) ||
    isIdField(field) ||
    isRelationKey(field)
  ) {
    return false;
  }

  return true;
}

export function isOwnInputField(field: DMMF.Field) {
  return isInputField(field) && !isRelationField(field);
}
