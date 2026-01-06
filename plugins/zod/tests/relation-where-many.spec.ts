import { RelationWhereManyPrinter } from '../src/lib/printers/internal-printers/relation-where-many-printer.js';
import { trim } from './__helpers.js';
import { Category } from './test-data.js';

describe('RelationWhereManyPrinter', () => {
  it('should print own where', () => {
    const expected = `
    export const CategoryRelationManyWhere = z.union([
      z.object({ some: CategoryOwnWhere }),
      z.object({ every: CategoryOwnWhere }),
      z.object({ none: CategoryOwnWhere })
    ])`;

    const actual = new RelationWhereManyPrinter(Category as any).print();

    expect(trim(actual)).toEqual(trim(expected));
  });
});
