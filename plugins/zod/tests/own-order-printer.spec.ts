import { OwnOrderPrinter } from '../src/lib/printers/internal-printers/own-order-printer.js';
import { trim } from './__helpers.js';
import { Category } from './test-data.js';

describe('OwnOrderPrinter', () => {
  it('should print own order', () => {
    const expected = `
    export const CategoryOwnOrder = z.object({ 
      id: External.dir().optional(), 
      createdAt: External.dir().optional(), 
      updatedAt: External.dir().optional(), 
      deletedAt: External.dir().optional(), 
      name: External.dir().optional(), 
      parentId: External.dir().optional()
    })
    `;
    expect(new OwnOrderPrinter(Category as any).print()).toEqual(
      trim(expected),
    );
  });
});
