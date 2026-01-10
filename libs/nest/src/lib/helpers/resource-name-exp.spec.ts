import { ResouceNameExp } from './resource-name-exp.js';

describe('resourceName', () => {
  describe('valid', () => {
    it.each`
      name
      ${'ProductController'}
      ${'CategoryService'}
      ${'CategoryService'}
      ${'CategoryEventListener'}
      ${'CategoryInterceptor'}
      ${'CategoryGuard'}
      ${'CategoryFilter'}
      ${'CategoryPipe'}
      ${'CategoryResolver'}
    `('ResouceNameExp.test($name) should return true', ({ name }) => {
      expect(ResouceNameExp.test(name)).toBeTruthy();
    });
  });

  describe('invalid', () => {
    it.each`
      name
      ${'Product'}
    `('ResouceNameExp.test($name) should return true', ({ name }) => {
      expect(ResouceNameExp.test(name)).toBeFalsy();
    });
  });
});
