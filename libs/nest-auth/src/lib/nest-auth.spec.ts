import { nestAuth } from './nest-auth.js';

describe('nestAuth', () => {
  it('should work', () => {
    expect(nestAuth()).toEqual('nest-auth');
  });
});
