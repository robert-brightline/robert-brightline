import { EnumPrinter } from '../src/index.js';
import { Status } from './test-data.js';

describe('EnumPrinter', () => {
  it('should print enum schema', () => {
    expect(new EnumPrinter(Status).print()).toEqual(
      `export const StatusEnum = z.enum([ 'ACTIVE', 'PASSIVE' ])`,
    );
  });
});
