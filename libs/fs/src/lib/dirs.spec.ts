import { join } from 'path';
import { dirs } from './dirs.js';
describe('dirs', () => {
  it('should read dirs', async () => {
    await dirs(join(__dirname, '..'));
  });
});
