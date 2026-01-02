import { imsDb } from './ims-db.js';

describe('imsDb', () => {
  it('should work', () => {
    expect(imsDb()).toEqual('ims-db');
  });
});
