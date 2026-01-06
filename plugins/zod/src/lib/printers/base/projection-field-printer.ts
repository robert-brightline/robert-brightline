import { External, Internal } from '../../common/imports.js';
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
    return `${Internal}.${this.field.type}${nameSuffixes.RelationProjection}`;
  }

  protected override manyRelationField(): string {
    return `${Internal}.${this.field.type}${nameSuffixes.RelationManyProjection}`;
  }

  protected override enumField(): string {
    return this.scalarField();
  }
}
