import type { DMMF } from '@prisma/generator-helper';
import { names } from '@robert-brightline/names';
import { CreatePrinter } from './lib/printers/create-printer.js';
import { MainSchemaPrinter } from './lib/printers/main-schema-printer.js';
import { OrderPrinter } from './lib/printers/oder-printer.js';
import { ProjectionPrinter } from './lib/printers/projection-printer.js';
import { QueryPrinter } from './lib/printers/query-printer.js';
import { UpdatePrinter } from './lib/printers/update-printer.js';
import { WherePrinter } from './lib/printers/where-printer.js';

export function generateModels(datamodel: DMMF.Datamodel) {
  const modelSchemas: [fileName: string, schema: string][] = [];

  const models = datamodel.models;

  const __fileName = (modelName: string, suffix: string) => {
    const kebab = names(modelName).kebab;
    return `${kebab}/${kebab}-${suffix}.ts`;
  };

  for (const model of models) {
    modelSchemas.push([
      __fileName(model.name, 'create'),
      new MainSchemaPrinter(model, CreatePrinter).print(),
    ]);

    modelSchemas.push([
      __fileName(model.name, 'update'),
      new MainSchemaPrinter(model, UpdatePrinter).print(),
    ]);

    modelSchemas.push([
      __fileName(model.name, 'projection'),
      new MainSchemaPrinter(model, ProjectionPrinter).print(),
    ]);

    modelSchemas.push([
      __fileName(model.name, 'order'),
      new MainSchemaPrinter(model, OrderPrinter).print(),
    ]);

    modelSchemas.push([
      __fileName(model.name, 'where'),
      new MainSchemaPrinter(model, WherePrinter).print(),
    ]);

    {
      const fileName = __fileName(model.name, `query`);
      const schema = new QueryPrinter(model).print();
      modelSchemas.push([fileName, schema]);
    }
  }

  return modelSchemas;
}
