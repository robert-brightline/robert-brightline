import type { DMMF } from '@prisma/generator-helper';
import { External } from '../../common/imports.js';
import { nameSuffixes } from '../../common/name-suffixes.js';
import { SchemaPrinter } from '../base/schema-printer.js';

export class EnumArrayFilterPrinter extends SchemaPrinter<DMMF.DatamodelEnum> {
  protected override shape(): string {
    const enumName = `${this.model.name}${nameSuffixes.Enum}`;
    return `{
         equals: ${enumName}.array().optional(), 
         has: ${enumName}.optional(), 
         hasEvery: ${enumName}.array().optional(), 
         hasSome: ${enumName}.array().optional(),
         isEmpty: ${External}.bool().optional()
        }`;
  }

  protected override schema(shape: string): string {
    return `z.object(${shape})`;
  }

  protected override schemaNameSuffix(): string {
    return nameSuffixes.EnumArrayFilter;
  }
}
