import type { DMMF } from '@prisma/generator-helper';
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
  const internals: string[] = [];

  internals.push(`import * as External from '@robert-brightline/zod';`);
  internals.push(`import * as Enums from './enums.js'`);
  internals.push(`import { z } from 'zod';`);

  for (const model of models) {
    internals.push(new OwnProjectionPrinter(model).print());
    internals.push(new OwnOrderPrinter(model).print());
    internals.push(new OwnWherePrinter(model).print());

    internals.push(new OwnCreatePrinter(model).print());
    internals.push(new OwnUpdatePrinter(model).print());

    internals.push(new RelationProjectionPrinter(model).print());
    internals.push(new RelationProjectionManyPrinter(model).print());

    internals.push(new RelationWhereManyPrinter(model).print());
    internals.push(new RelationCreatePrinter(model).print());
    internals.push(new RelationCreateManyPrinter(model).print());
  }

  return internals.join('\n');
}
