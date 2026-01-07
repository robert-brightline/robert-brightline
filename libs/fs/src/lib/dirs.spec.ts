import { join } from 'path';
import { dirs } from './dirs.js';
import { files } from './files.js';
describe('dirs', () => {
  it('should read dirs', async () => {
    console.log(await dirs(join(__dirname, '..')));
    console.log(await files(join(__dirname, '..')));
  });
});
