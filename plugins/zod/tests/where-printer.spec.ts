import { WherePrinter } from '../src/lib/printers/where-printer.js';
import { trim } from './__helpers.js';
import { Category } from './test-data.js';

describe('WherePrinter', () => {
  it('should print the create schema', () => {
    const expected = ` 
        export const CategoryWhere = z.object({ 
          id: External.IntegerFilter.optional(),
          createdAt: External.DateTimeFilter.optional(),
          updatedAt: External.DateTimeFilter.optional(),
          deletedAt: External.DateTimeFilter.optional(),
          name: External.StringFilter.optional(),
          parent: Internal.CategoryOwnWhere.optional(),
          parentId: External.IntegerFilter.optional(),
          children: Internal.CategoryRelationManyWhere.optional()
         })
        `;

    const actual = new WherePrinter(Category as any).print();

    expect(trim(actual)).toEqual(trim(expected));
  });
});
