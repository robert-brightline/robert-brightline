import { RelationProjectionPrinter } from '../src/lib/printers/internal-printers/relation-projection-printer.js';
import { trim } from './__helpers.js';
import { Category } from './test-data.js';

describe('RelationProjection', () => {
  it('should print own where', () => {
    const expected = `
    export const CategoryRelationProjection = z.union([ 
     External.bool(),
     z.object({ 
      select: CategoryOwnProjection.optional(), 
      where: CategoryOwnWhere.optional() 
     })
    ])
    `;

    const actual = new RelationProjectionPrinter(Category as any).print();

    expect(trim(actual)).toEqual(trim(expected));
  });
});
