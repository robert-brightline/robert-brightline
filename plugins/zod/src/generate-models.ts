import type { DMMF } from '@prisma/generator-helper';
import { names } from '@robert-brightline/names';
import { Enums, External, Internal } from './lib/common/imports-as.js';
import { CreatePrinter } from './lib/printers/create-printer.js';
import { OrderPrinter } from './lib/printers/oder-printer.js';
import { ProjectionPrinter } from './lib/printers/projection-printer.js';
import { QueryPrinter } from './lib/printers/query-printer.js';
import { UpdatePrinter } from './lib/printers/update-printer.js';
import { WherePrinter } from './lib/printers/where-printer.js';

export function generateModels(datamodel: DMMF.Datamodel) {
  const modelSchemas: [fileName: string, schema: string][] = [];

  const models = datamodel.models;

  const zodImport = `import { z } from 'zod';`;
  const externalImport = `import * as ${External} from '@robert-brightline/zod';`;
  const internalImport = `import * as ${Internal} from '../internals.js';`;
  const enumsImport = `import * as ${Enums} from '../enums.js';`;

  const commonImports = ` 
        ${zodImport}
        ${externalImport}
        ${internalImport}
        ${enumsImport}
  `;

  const __fileName = (modelName: string, suffix: string) => {
    const kebab = names(modelName).kebab;
    return `${kebab}/${kebab}-${suffix}.ts`;
  };
  for (const model of models) {
    // Create schema
    {
      const fileName = __fileName(model.name, `create`);
      const schema = `
      ${commonImports}
      
      ${new CreatePrinter(model).print()}
      `;
      modelSchemas.push([fileName, schema]);
    }

    // Update schema
    {
      const fileName = __fileName(model.name, `update`);
      const schema = `
      ${commonImports}

      ${new UpdatePrinter(model).print()}
      `;
      modelSchemas.push([fileName, schema]);
    }

    // Projection schema
    {
      const fileName = __fileName(model.name, `projection`);
      const schema = `
      ${commonImports}

      ${new ProjectionPrinter(model).print()}
      `;
      modelSchemas.push([fileName, schema]);
    }

    // Order schema
    {
      const fileName = __fileName(model.name, `order`);
      const schema = `
      ${commonImports}

      ${new OrderPrinter(model).print()}
      `;
      modelSchemas.push([fileName, schema]);
    }

    // Where schema
    {
      const fileName = __fileName(model.name, `where`);
      const schema = `
      ${commonImports}

      ${new WherePrinter(model).print()}
      `;
      modelSchemas.push([fileName, schema]);
    }

    // Query printer

    {
      const fileName = __fileName(model.name, `query`);
      const schema = new QueryPrinter(model).print();
      modelSchemas.push([fileName, schema]);
    }
  }

  return modelSchemas;
}
