import { External, Internal } from '../../common/imports-as.js';
import { nameSuffixes } from '../../common/name-suffixes.js';
import { InputFieldPrinter } from './input-field-printer.js';

export class OrderFieldPrinter extends InputFieldPrinter {
  protected override oneRelationField(): string {
    return this.join(
      Internal,
      `${this.field.type}${nameSuffixes.OwnOrder}`,
      this.optional(),
    );
  }

  protected override manyRelationField(): string {
    return this.join(External, 'orderByCount()', this.optional());
  }

  protected override optional(): string {
    return 'optional()';
  }

  protected override scalarField(): string {
    return this.join(External, 'dir()', this.optional());
  }

  protected override enumField(): string {
    return this.scalarField();
  }
}
