import type { DMMF } from '@prisma/generator-helper';
import { nameSuffixes } from '../../common/name-suffixes.js';
import { InputPrinter } from '../base/input-printer.js';
import { WhereFieldPrinter } from '../base/where-field-printer.js';

export class OwnWherePrinter extends InputPrinter {
  constructor(model: DMMF.Model) {
    super(model, WhereFieldPrinter);
  }

  protected override schemaNameSuffix(): string {
    return nameSuffixes.OwnWhere;
  }

  protected override filterField(field: DMMF.Field): boolean {
    return field.relationName == undefined;
  }
}
