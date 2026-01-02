import {
  gitCurrentUsername,
  gitEmail,
  githubPage,
  githubPageForDoc,
  gitRepoName,
  gitRepoUrl,
} from './git.js';
describe('git', () => {
  const url = gitRepoUrl();
  const repoName = gitRepoName(url);

  it('should get the your username', () => {
    expect(gitCurrentUsername()).toEqual('robert-brightline');
  });
  it('should get the repository username', () => {
    expect(gitCurrentUsername()).toEqual('robert-brightline');
  });

  it('should get the github page url', () => {
    expect(githubPage(repoName)).toEqual(
      `https://${gitCurrentUsername()}.github.io`,
    );
  });

  it('should get the github doc page url', () => {
    expect(githubPageForDoc(githubPage(repoName), 'libs/some')).toEqual(
      `${githubPage(repoName)}/libs/some`,
    );
  });

  it('should get the git email', () => {
    expect(gitEmail()).toEqual('robert.brightline@gmail.com');
  });
});
