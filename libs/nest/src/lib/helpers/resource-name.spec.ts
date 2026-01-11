import { extractResourceName } from './resource-name.js';
// Controller|Service|EventListener|Interceptor|Guard|Filter|Pipe|Resolver
describe('resourceName', () => {
  it.each`
    name                       | expected
    ${'ProductController'}     | ${'Product'}
    ${'CategoryService'}       | ${'Category'}
    ${'CategoryService'}       | ${'Category'}
    ${'CategoryEventListener'} | ${'Category'}
    ${'CategoryInterceptor'}   | ${'Category'}
    ${'CategoryGuard'}         | ${'Category'}
    ${'CategoryFilter'}        | ${'Category'}
    ${'CategoryPipe'}          | ${'Category'}
    ${'CategoryResolver'}      | ${'Category'}
  `('resourceName($name) should return $expected', ({ name, expected }) => {
    expect(extractResourceName(name)).toEqual(expected);
  });
});
