import { OwnUpdatePrinter } from '../src/lib/printers/own-printers/own-update-printer.js';
import { trim } from './__helpers.js';
import { Category } from './test-data.js';

describe('OwnUpdatePrinter', () => {
  it('should print own where', () => {
    const expected = `
    export const CategoryOwnUpdate = z.object({ 
      name: External.str().optional()
    })
    `;
    expect(new OwnUpdatePrinter(Category as any).print()).toEqual(
      trim(expected),
    );
  });
});
