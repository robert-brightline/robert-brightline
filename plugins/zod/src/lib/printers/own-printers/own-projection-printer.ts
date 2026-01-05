import type { DMMF } from '@prisma/generator-helper';
import { nameSuffixes } from '../../common/name-suffixes.js';
import { InputPrinter } from '../base/input-printer.js';
import { ProjectionFieldPrinter } from '../base/projection-field-printer.js';

export class OwnProjectionPrinter extends InputPrinter {
  constructor(model: DMMF.Model) {
    super(model, ProjectionFieldPrinter);
  }

  protected override schemaNameSuffix(): string {
    return nameSuffixes.OwnProjection;
  }

  protected override filterField(field: DMMF.Field): boolean {
    return field.relationName == undefined;
  }
}
