import { UpdatePrinter } from '../src/lib/printers/update-printer.js';
import { trim } from './__helpers.js';
import { Category } from './test-data.js';

describe('UpdatePrinter', () => {
  it('should print the create schema', () => {
    const expected = ` 
         export const CategoryUpdate = z.object({ 
         name: External.name().optional(), 
         parent: Internal.CategoryRelationCreate.optional(), 
         children: Internal.CategoryRelationManyCreate.optional()
         })
        `;

    const actual = new UpdatePrinter(Category as any).print();

    expect(trim(actual)).toEqual(trim(expected));
  });
});
