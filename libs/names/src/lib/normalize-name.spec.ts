import { normalizeName } from './normalize-name.js';

describe('normalizeName', () => {
  it.each`
    input                    | expected
    ${'ExampleName'}         | ${'example-name'}
    ${'example_name'}        | ${'example-name'}
    ${'example-name'}        | ${'example-name'}
    ${' example.name '}      | ${'example-name'}
    ${'EXAMPLE NAME'}        | ${'example-name'}
    ${'EXAMPLE NAME  '}      | ${'example-name'}
    ${'  EXAMPLE NAME  '}    | ${'example-name'}
    ${'  EXAMPLE    NAME  '} | ${'example-name'}
  `('normalizes "$input" to "$expected"', ({ input, expected }) => {
    const result = normalizeName(input);
    expect(result).toBe(expected);
  });
});
