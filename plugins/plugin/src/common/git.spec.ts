import {
  gitCurrentUsername,
  gitEmail,
  githubPage,
  githubPageForDoc,
} from './git.js';
describe('git', () => {
  it('should get the your username', () => {
    expect(gitCurrentUsername()).toEqual('robert-brightline');
  });
  it('should get the repository username', () => {
    expect(gitCurrentUsername()).toEqual('robert-brightline');
  });

  it('should get the github page url', () => {
    expect(githubPage()).toEqual(
      `https://${gitCurrentUsername()}.github.io`,
    );
  });

  it('should get the github doc page url', () => {
    expect(githubPageForDoc('libs/some')).toEqual(
      `${githubPage()}/libs/some`,
    );
  });

  it('should get the git email', () => {
    expect(gitEmail()).toEqual('robert.brightline@gmail.com');
  });
});
