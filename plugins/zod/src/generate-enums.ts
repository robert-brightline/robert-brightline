import type { DMMF } from '@prisma/generator-helper';
import { External } from './lib/common/imports-as.js';
import { EnumPrinter } from './lib/printers/enum-printer.js';
import { DistinctPrinter } from './lib/printers/internal-printers/distinct-printer.js';
import { EnumArrayFilterPrinter } from './lib/printers/internal-printers/enum-array-filter-printer.js';
import { EnumFilterPrinter } from './lib/printers/internal-printers/enum-filter-printer.js';

export function generateEnums(datamodel: DMMF.Datamodel) {
  const enumSchemas: string[] = [];

  enumSchemas.push(`import { z } from 'zod';`);
  enumSchemas.push(`import * as ${External} from '@robert-brightline/zod';`);

  const enums = datamodel.enums;
  const models = datamodel.models;

  for (const model of enums) {
    enumSchemas.push(new EnumPrinter(model).print());
    enumSchemas.push(new EnumFilterPrinter(model).print());
    enumSchemas.push(new EnumArrayFilterPrinter(model).print());
  }

  for (const model of models) {
    enumSchemas.push(new DistinctPrinter(model).print());
  }

  return enumSchemas.join('\n');
}
