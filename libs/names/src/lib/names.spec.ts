import { names, type Names } from './names.js';

describe('names', () => {
  it.each`
    input     | expected
    ${'some'} | ${{ camel: 'some', pascal: 'Some', kebab: 'some', snake: 'some', constant: 'SOME', title: 'Some' } as Names}
  `('should convert $input to $expected', ({ input, expected }) => {
    expect(names(input)).toEqual(expected);
  });
});
