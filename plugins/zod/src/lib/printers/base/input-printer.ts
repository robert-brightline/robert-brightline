import type { DMMF } from '@prisma/generator-helper';
import { nameSuffixes } from '../../common/name-suffixes.js';
import { InputFieldPrinter } from './input-field-printer.js';
import { SchemaPrinter } from './schema-printer.js';

/**
 * By default it print the create-input schema
 */
export class InputPrinter extends SchemaPrinter<DMMF.Model> {
  constructor(
    model: DMMF.Model,
    protected readonly fieldPrinter: typeof InputFieldPrinter = InputFieldPrinter,
  ) {
    super(model);
  }

  protected filterField(field: DMMF.Field) {
    return !!field;
  }

  protected mapField(field: DMMF.Field) {
    return field;
  }

  protected override schemaNameSuffix(): string {
    return nameSuffixes.Create;
  }

  protected override shape(): string {
    const _shape = this.model.fields
      .filter(this.filterField)
      .map(this.mapField)
      .map((field) => new this.fieldPrinter(field).print())
      .join(', ');

    return `{ ${_shape} }`;
  }

  protected override schema(shape: string): string {
    return `z.object(${shape})`;
  }
}
