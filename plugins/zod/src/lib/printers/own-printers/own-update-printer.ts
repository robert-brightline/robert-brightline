import type { DMMF } from '@prisma/generator-helper';
import { nameSuffixes } from '../../common/name-suffixes.js';
import { InputPrinter } from '../base/input-printer.js';
import { isOwnInputField } from '../helpers/field-checkers.js';

export class OwnUpdatePrinter extends InputPrinter {
  protected override filterField(field: DMMF.Field): boolean {
    return isOwnInputField(field);
  }

  protected override mapField(field: DMMF.Field): DMMF.Field {
    return { ...field, isRequired: false };
  }

  protected override schemaNameSuffix(): string {
    return nameSuffixes.OwnUpdate;
  }
}
