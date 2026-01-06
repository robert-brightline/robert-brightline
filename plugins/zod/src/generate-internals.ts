import type { DMMF } from '@prisma/generator-helper';
import {
  importEnums,
  importExternal,
  importZod,
} from './lib/common/imports.js';
import { OwnCreatePrinter } from './lib/printers/internal-printers/own-create-printer.js';
import { OwnOrderPrinter } from './lib/printers/internal-printers/own-order-printer.js';
import { OwnProjectionPrinter } from './lib/printers/internal-printers/own-projection-printer.js';
import { OwnUpdatePrinter } from './lib/printers/internal-printers/own-update-printer.js';
import { OwnWherePrinter } from './lib/printers/internal-printers/own-where-printer.js';
import { RelationCreateManyPrinter } from './lib/printers/internal-printers/relation-create-many-printer.js';
import { RelationCreatePrinter } from './lib/printers/internal-printers/relation-create-printer.js';
import { RelationProjectionManyPrinter } from './lib/printers/internal-printers/relation-projection-many-printer.js';
import { RelationProjectionPrinter } from './lib/printers/internal-printers/relation-projection-printer.js';
import { RelationWhereManyPrinter } from './lib/printers/internal-printers/relation-where-many-printer.js';

export function generateInternals(datamodel: DMMF.Datamodel) {
  const models = datamodel.models;
  const internalSchemaList: string[] = [];
  const importList: string[] = [];

  for (const model of models) {
    internalSchemaList.push(new OwnProjectionPrinter(model).print());
    internalSchemaList.push(new OwnOrderPrinter(model).print());
    internalSchemaList.push(new OwnWherePrinter(model).print());

    internalSchemaList.push(new OwnCreatePrinter(model).print());
    internalSchemaList.push(new OwnUpdatePrinter(model).print());

    internalSchemaList.push(new RelationProjectionPrinter(model).print());
    internalSchemaList.push(new RelationProjectionManyPrinter(model).print());

    internalSchemaList.push(new RelationWhereManyPrinter(model).print());
    internalSchemaList.push(new RelationCreatePrinter(model).print());
    internalSchemaList.push(new RelationCreateManyPrinter(model).print());
  }

  const internalSchemaCode = internalSchemaList.join('\n');

  importList.push(importExternal(internalSchemaCode));
  importList.push(importZod(internalSchemaCode));
  importList.push(importEnums(internalSchemaCode, './'));

  const importCode = importList.filter((e) => e && e.trim()).join('\n');

  return [importCode, internalSchemaCode]
    .filter((e) => e && e.trim())
    .join('\n');
}
