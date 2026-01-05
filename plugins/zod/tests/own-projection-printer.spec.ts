import { OwnProjectionPrinter } from '../src/index.js';
import { trim } from './__helpers.js';
import { Category } from './test-data.js';

describe('OwnProjectionPritner', () => {
  it('should print own projection', () => {
    const expected = `
    export const CategoryOwnProjection = z.object({ 
      id: External.bool().optional(), 
      createdAt: External.bool().optional(), 
      updatedAt: External.bool().optional(), 
      deletedAt: External.bool().optional(), 
      name: External.bool().optional(), 
      parentId: External.bool().optional()
    })
    `;
    expect(new OwnProjectionPrinter(Category as any).print()).toEqual(
      trim(expected),
    );
  });
});
