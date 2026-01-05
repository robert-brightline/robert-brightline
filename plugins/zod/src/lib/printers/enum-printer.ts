import type { DMMF } from '@prisma/generator-helper';
import { nameSuffixes } from '../common/name-suffixes.js';
import { SchemaPrinter } from './base/schema-printer.js';

/**
 * Print the enum types' schema
 */
export class EnumPrinter extends SchemaPrinter<DMMF.DatamodelEnum> {
  protected override shape(): string {
    return `[ ${this.model.values.map((e) => `'${e.name}'`).join(', ')} ]`;
  }
  protected override schemaNameSuffix(): string {
    return nameSuffixes.Enum;
  }

  protected override schema(shape: string): string {
    return `z.enum(${shape})`;
  }
}
