import { execSync } from 'child_process';

export function gitCurrentUsername() {
  return execSync('git config user.name').toString().trim();
}

export function gitRepositoryName() {
  try {
    // 1. Get the remote origin URL
    const remoteUrl = execSync('git config --get remote.origin.url')
      .toString()
      .trim();

    // 2. Use Regex to find the owner
    // This matches the part after '.com/' (HTTPS) or '.com:' (SSH)
    const match = remoteUrl.match(/github\.com[:/]([^/]+)/);

    if (match && match[1]) {
      return match[1]; // This is the owner's username
    }
    return 'Owner not found in URL';
  } catch {
    return 'Not a git repository or no remote origin set';
  }
}

export function githubPage() {
  return `https://${gitRepositoryName()}.github.io`;
}

export function githubPageForDoc(directory: string) {
  return `${githubPage()}/${directory}`;
}

export function gitEmail() {
  return execSync('git config user.email').toString().trim();
}

export function gitRepoName() {
  try {
    // 1. Get the remote origin URL (e.g., https://github.com/user/repo-name.git)
    const remoteUrl = execSync('git config --get remote.origin.url')
      .toString()
      .trim();

    // 2. Extract the name between the last '/' and the optional '.git'
    // This regex works for both HTTPS and SSH URLs
    const repoName = remoteUrl.split('/').pop()?.replace('.git', '');

    if (repoName === undefined) {
      throw new Error('Repository name could not be determined');
    }

    return repoName;
  } catch {
    return 'Not a git repository or no remote origin';
  }
}
