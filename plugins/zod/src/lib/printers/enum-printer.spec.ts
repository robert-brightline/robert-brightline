import { EnumPriner } from './enum-printer.js';

describe('enum printer', () => {
  it('should print enum schema', () => {
    expect(
      new EnumPriner({
        name: 'Some',
        values: [{ name: 'First' }, { name: 'Second' }] as any,
      }).print(),
    ).toEqual(`export const SomeEnum = z.enum([ 'First', 'Second'])`);
  });
});
