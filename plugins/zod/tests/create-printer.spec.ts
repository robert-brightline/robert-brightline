import { CreatePrinter } from '../src/lib/printers/create-printer.js';
import { trim } from './__helpers.js';
import { Category } from './test-data.js';

describe('CreatePrinter', () => {
  it('should print the create schema', () => {
    const expected = ` 
        export const CategoryCreate = z.object({ 
         name: External.name(), 
         parent: Internal.CategoryRelationCreate.optional(), 
         children: Internal.CategoryRelationManyCreate.optional()
         })
        `;

    const actual = new CreatePrinter(Category as any).print();

    expect(trim(actual)).toEqual(trim(expected));
  });
});
