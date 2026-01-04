import { FieldPrinter } from './field-printer.js';

export class InputFieldPrinter extends FieldPrinter {
  protected override schema() {
    switch (this.field.kind) {
      case 'object':
      case 'scalar':
      case 'enum':
      case 'unsupported':
    }

    return 'z.any';
  }
}
