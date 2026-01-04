import type { DMMF } from '@prisma/generator-helper';
import type { FieldPrinter } from './field-printer.js';
import { SchemaPrinter } from './schema-printer.js';

export class InputPrinter extends SchemaPrinter<DMMF.Model> {
  constructor(
    model: DMMF.Model,
    protected readonly fieldPrinter: typeof FieldPrinter,
  ) {
    super(model);
  }

  protected override shape(): string {
    return this.model.fields
      .map((field) => new this.fieldPrinter(field).print())
      .join(',');
  }
}
