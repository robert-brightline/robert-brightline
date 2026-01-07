import type { DMMF } from '@prisma/generator-helper';
import { names } from '@robert-brightline/names';
import type { Printable } from '../common/printable.js';

export class QueryPrinter implements Printable {
  constructor(protected readonly model: DMMF.Model) {}

  print() {
    const { pascal, kebab } = names(this.model.name);

    const importsList: string[] = [
      "import z from 'zod';",
      "import * as External from '@robert-brightline/zod';",
      `import { ${pascal}Field } from '../enums.js';`,
      `import { ${pascal}Order } from './${kebab}-order.js';`,
      `import { ${pascal}Where } from './${kebab}-where.js';`,
      `import { ${pascal}Projection } from './${kebab}-projection.js';`,
    ];

    const schemCode = `
    export const ${pascal}Query = z.object({
      distinct: External.prejson(${pascal}Field.array().optional()),
      select: External.prejson(${pascal}Projection.optional()),
      orderBy: External.prejson(${pascal}Order.optional()),
      where: External.prejson(${pascal}Where.optional()),
      take: External.int().min(0).optional(),
      skip: External.int().min(0).optional(),
    });
`;

    const importCode = importsList.join('\n');
    return [importCode, schemCode].join('\n');
  }
}
