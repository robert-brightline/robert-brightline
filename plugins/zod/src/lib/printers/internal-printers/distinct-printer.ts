import type { DMMF } from '@prisma/generator-helper';
import { nameSuffixes } from '../../common/name-suffixes.js';
import { SchemaPrinter } from '../base/schema-printer.js';
import { isOwnField, isQueryField } from '../helpers/field-checkers.js';

/**
 * Print the models distinct field enum schema
 */
export class DistinctPrinter extends SchemaPrinter<DMMF.Model> {
  protected override shape(): string {
    return `[ ${this.model.fields
      .filter(isOwnField)
      .filter(isQueryField)
      .map((e) => `'${e.name}'`)
      .join(', ')} ]`;
  }
  protected override schemaNameSuffix(): string {
    return nameSuffixes.Field;
  }

  protected override schema(shape: string): string {
    return `z.enum(${shape})`;
  }
}
