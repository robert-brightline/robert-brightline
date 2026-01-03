import { Encryption } from './encryption.js';

describe('encryption', () => {
  it('should work', async () => {
    const data = 'confidential-data';
    const key = Encryption.generateKey();
    const version = '0.0.1';

    const encryptedData = await Encryption.encrypt(data, key, version);
    console.log(`EncryptedData: "${encryptedData}"`);

    const decrypedData = await Encryption.decrypt(encryptedData, key);
    console.log(`DecryptedData: "${decrypedData}"`);
    const parts = await Encryption.parts(encryptedData);
  });
});
