import { RelationProjectionManyPrinter } from '../src/lib/printers/internal-printers/relation-projection-many-printer.js';
import { trim } from './__helpers.js';
import { Category } from './test-data.js';

describe('RelationProjection', () => {
  it('should print own where', () => {
    const expected = `
    export const CategoryRelationManyProjection = z.union([ 
     External.bool(),
     z.object({ 
      select: CategoryOwnProjection.optional(), 
      where: CategoryOwnWhere.optional(),
      orderBy: CategoryOwnOrder.optional(), 
      take: External.int().min(0).optional(),
      skip: External.int().min(0).optional()
     })
    ])
    `;

    const actual = new RelationProjectionManyPrinter(Category as any).print();

    expect(trim(actual)).toEqual(trim(expected));
  });
});
