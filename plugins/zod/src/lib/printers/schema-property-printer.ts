import type { DMMF } from '@prisma/generator-helper';
import type { Printable } from '../common/printable.js';

export class SchemaPropertyPrinter implements Printable {
  constructor(protected readonly field: DMMF.Field) {}

  print(): string {
    return ``;
  }
}
