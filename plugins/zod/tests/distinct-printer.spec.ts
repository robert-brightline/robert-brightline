import { DistinctPrinter } from '../src/index.js';
import { trim } from './__helpers.js';
import { Category } from './test-data.js';

describe('DistinctPrinter', () => {
  it('should print model distinct field', () => {
    const expected = `
    export const CategoryField = z.enum([
        'id',
        'createdAt',
        'updatedAt',
        'deletedAt',
        'name',
        'parentId' 
     ])
    `;
    expect(new DistinctPrinter(Category as any).print()).toEqual(
      trim(expected),
    );
  });
});
