import { External } from '../../common/imports-as.js';
import { nameSuffixes } from '../../common/name-suffixes.js';
import { InputFieldPrinter } from './input-field-printer.js';

export class ProjectionFieldPrinter extends InputFieldPrinter {
  protected override optional(): string {
    return 'optional()';
  }

  protected override scalarField(): string {
    return this.join(External, 'bool()', this.optional());
  }

  protected override oneRelationField(): string {
    return `${this.field.name}${nameSuffixes.RelationProjection}`;
  }

  protected override manyRelationField(): string {
    return `${this.field.name}${nameSuffixes.RelationManyProjection}`;
  }

  protected override enumField(): string {
    return this.scalarField();
  }
}
