import { RelationCreateManyPrinter } from '../src/lib/printers/internal-printers/relation-create-many-printer.js';
import { trim } from './__helpers.js';
import { Category } from './test-data.js';

describe('RelationCreateMany', () => {
  it('should print own where', () => {
    const expected = `
    export const CategoryRelationManyCreate = z.union([ 
     External.connectMany(),
     z.object({ 
      createMany: z.object({ 
        data: CategoryOwnCreate.array() 
      }) 
     })
    ])
    `;

    const actual = new RelationCreateManyPrinter(Category as any).print();

    expect(trim(actual)).toEqual(trim(expected));
  });
});
