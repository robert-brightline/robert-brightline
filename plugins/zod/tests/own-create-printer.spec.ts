import { OwnCreatePrinter } from '../src/lib/printers/internal-printers/own-create-printer.js';
import { trim } from './__helpers.js';
import { Category } from './test-data.js';

describe('OwnCreatePrinter', () => {
  it('should print own where', () => {
    const expected = `
    export const CategoryOwnCreate = z.object({ 
      name: External.name()
    })
    `;
    expect(new OwnCreatePrinter(Category as any).print()).toEqual(
      trim(expected),
    );
  });
});
