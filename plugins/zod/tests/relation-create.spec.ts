import { RelationCreatePrinter } from '../src/lib/printers/internal-printers/relation-create-printer.js';
import { trim } from './__helpers.js';
import { Category } from './test-data.js';

describe('RelationCreate', () => {
  it('should print own where', () => {
    const expected = `
    export const CategoryRelationCreate = z.union([ 
     External.connect(),
     z.object({ 
      create: CategoryOwnCreate 
     })
    ])
    `;

    const actual = new RelationCreatePrinter(Category as any).print();

    expect(trim(actual)).toEqual(trim(expected));
  });
});
