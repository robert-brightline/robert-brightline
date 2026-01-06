import type { DMMF } from '@prisma/generator-helper';
import { names } from '@robert-brightline/names';

export class QueryPrinter {
  constructor(protected readonly model: DMMF.Model) {}

  print() {
    const { pascal, kebab } = names(this.model.name);
    return `
import z from 'zod';
import * as External from '@robert-brightline/zod';
import * as Internal from '../internals.js';
import { ${pascal}Field } from '../enums.js';
import { ${pascal}Order } from './${kebab}>-order.js';
import { ${pascal}Where } from './${kebab}>-where.js';
import { ${pascal}Projection } from './${kebab}>-projection.js';

export const ${pascal}Query = z.object({
  distinct: ${pascal}Field.array().optional(),
  select: ${pascal}Projection.optional(),
  orderBy: ${pascal}Order.optional(),
  where: ${pascal}Where.optional(),
  take: External.int().min(0).optional(),
  skip: External.int().min(0).optional(),
});
        `;
  }
}
