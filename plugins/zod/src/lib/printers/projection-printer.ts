import type { DMMF } from '@prisma/generator-helper';
import { nameSuffixes } from '../common/name-suffixes.js';
import { isQueryField } from './helpers/field-checkers.js';
import { OwnProjectionPrinter } from './internal-printers/own-projection-printer.js';

export class ProjectionPrinter extends OwnProjectionPrinter {
  protected override schemaNameSuffix(): string {
    return nameSuffixes.Projection;
  }

  override filterField(field: DMMF.Field): boolean {
    return isQueryField(field);
  }
}
