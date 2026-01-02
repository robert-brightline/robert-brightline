import { execSync } from 'child_process';

export function gitCurrentUsername() {
  return execSync('git config user.name').toString().trim();
}

export function gitRepoUrl() {
  return execSync('git config --get remote.origin.url').toString().trim();
}
export function gitRepoOwnerUsername(repositoryUrl: string) {
  const ownerUsername = repositoryUrl.match(/github\.com\/([^/]+)/)?.[1];

  if (ownerUsername === undefined) {
    throw new Error('Owner username could not be determined from remote URL');
  }

  return ownerUsername;
}

export function gitRepoName(repositoryUrl: string) {
  const match = repositoryUrl.match(/\/([^\\/]+)\.git$/);
  const repoName = match?.[1];
  if (repoName === undefined) {
    throw new Error('Repository name could not be determined from remote URL');
  }
  return repoName;
}

export function githubPage(repoName: string) {
  return `https://${repoName}.github.io`;
}

export function githubPageForDoc(githubPage: string, directory: string) {
  return `${githubPage}/${directory}`;
}

export function gitEmail() {
  return execSync('git config user.email').toString().trim();
}

export function suffixEmail(email: string, suffix: string) {
  return email.replace(/(@.+)$/, `+${suffix}$1`);
}
