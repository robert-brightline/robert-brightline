import { OrderPrinter } from '../src/lib/printers/oder-printer.js';
import { trim } from './__helpers.js';
import { Category } from './test-data.js';

describe('OrderPrinter', () => {
  it('should print the create schema', () => {
    const expected = ` 
      export const CategoryOrder = z.object({ 
          id: External.dir().optional(),
          createdAt: External.dir().optional(), 
          updatedAt: External.dir().optional(), 
          deletedAt: External.dir().optional(), 
          name: External.dir().optional(), 
          parent: Internal.CategoryOwnOrder.optional(), 
          parentId: External.dir().optional(), 
          children: External.orderByCount().optional()
      })
        `;

    const actual = new OrderPrinter(Category as any).print();

    expect(trim(actual)).toEqual(trim(expected));
  });
});
