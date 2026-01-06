import type { DMMF } from '@prisma/generator-helper';
import { importExternal, importZod } from './lib/common/imports.js';
import { EnumPrinter } from './lib/printers/enum-printer.js';
import { DistinctPrinter } from './lib/printers/internal-printers/distinct-printer.js';
import { EnumArrayFilterPrinter } from './lib/printers/internal-printers/enum-array-filter-printer.js';
import { EnumFilterPrinter } from './lib/printers/internal-printers/enum-filter-printer.js';

export function generateEnums(datamodel: DMMF.Datamodel) {
  const enumSchemaList: string[] = [];
  const importList: string[] = [];

  const enums = datamodel.enums;
  const models = datamodel.models;

  for (const model of enums) {
    enumSchemaList.push(new EnumPrinter(model).print());
    enumSchemaList.push(new EnumFilterPrinter(model).print());
    enumSchemaList.push(new EnumArrayFilterPrinter(model).print());
  }

  for (const model of models) {
    enumSchemaList.push(new DistinctPrinter(model).print());
  }

  const enumSchemaCode = enumSchemaList.join('\n');

  importList.push(importZod(enumSchemaCode));
  importList.push(importExternal(enumSchemaCode));

  const importCode = importList.join('\n');

  return [importCode, enumSchemaCode].filter((e) => e && e.trim()).join('\n');
}
