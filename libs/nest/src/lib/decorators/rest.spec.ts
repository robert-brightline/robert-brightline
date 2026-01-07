import { Rest } from './rest.js';
describe('Rest', () => {
  it('should decorator', () => {
    @Rest()
    class SampleController {
      find() {
        //
      }
    }
  });
});
