import type { DMMF } from '@prisma/generator-helper';
import type { Printable } from '../common/printable.js';

export class FieldPrinter implements Printable {
  constructor(protected readonly field: DMMF.Field) {}

  protected schema() {
    return 'z.any()';
  }

  print(): string {
    return `${this.field.name}: ${this.schema()}`;
  }
}
