import type { DMMF } from '@prisma/generator-helper';
import { nameSuffixes } from '../common/name-suffixes.js';
import { isQueryField } from './helpers/field-checkers.js';
import { OwnWherePrinter } from './internal-printers/own-where-printer.js';

export class WherePrinter extends OwnWherePrinter {
  protected override schemaNameSuffix(): string {
    return nameSuffixes.Where;
  }

  override filterField(field: DMMF.Field): boolean {
    return isQueryField(field);
  }
}
