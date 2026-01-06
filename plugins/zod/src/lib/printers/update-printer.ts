import type { DMMF } from '@prisma/generator-helper';
import { nameSuffixes } from '../common/name-suffixes.js';
import { InputPrinter } from './base/input-printer.js';
import { isInputField, isReadonlyField } from './helpers/field-checkers.js';

export class UpdatePrinter extends InputPrinter {
  protected override schemaNameSuffix(): string {
    return nameSuffixes.Update;
  }
  protected override filterField(field: DMMF.Field): boolean {
    if (isReadonlyField(field)) {
      return false;
    }
    return isInputField(field);
  }

  override mapField(field: DMMF.Field): DMMF.Field {
    return { ...field, isRequired: false };
  }
}
