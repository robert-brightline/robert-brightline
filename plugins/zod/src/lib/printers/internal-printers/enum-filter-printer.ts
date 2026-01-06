import type { DMMF } from '@prisma/generator-helper';
import { nameSuffixes } from '../../common/name-suffixes.js';
import { SchemaPrinter } from '../base/schema-printer.js';

export class EnumFilterPrinter extends SchemaPrinter<DMMF.DatamodelEnum> {
  protected override shape(): string {
    const enumName = `${this.model.name}${nameSuffixes.Enum}`;
    return `{
            equals: ${enumName}.optional(),
            in: ${enumName}.array().optional(),
            notIn: ${enumName}.array().optional(),
            not: ${enumName}.optional() ,
        }`;
  }

  protected override schema(shape: string): string {
    return `z.object(${shape})`;
  }

  protected override schemaNameSuffix(): string {
    return nameSuffixes.EnumFilter;
  }
}
