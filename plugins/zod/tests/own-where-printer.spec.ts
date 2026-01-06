import { OwnWherePrinter } from '../src/lib/printers/internal-printers/own-where-printer.js';
import { trim } from './__helpers.js';
import { Category } from './test-data.js';

describe('OwnWherePrinter', () => {
  it('should print own where', () => {
    const expected = `
    export const CategoryOwnWhere = z.object({ 
      id: External.IntegerFilter.optional(), 
      createdAt: External.DateTimeFilter.optional(), 
      updatedAt: External.DateTimeFilter.optional(), 
      deletedAt: External.DateTimeFilter.optional(), 
      name: External.StringFilter.optional(), 
      parentId: External.IntegerFilter.optional()
    })
    `;
    expect(new OwnWherePrinter(Category as any).print()).toEqual(
      trim(expected),
    );
  });
});
