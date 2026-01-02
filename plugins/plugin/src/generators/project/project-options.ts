import { names, readJsonFile, workspaceRoot } from '@nx/devkit';
import { join, normalize } from 'path';
import {
  gitCurrentUsername,
  gitEmail,
  githubPageForDoc,
  gitRepoName,
  gitRepoOwnerUsername,
  gitRepoUrl,
  suffixEmail,
} from '../../common/git';
import type { ProjectGeneratorSchema } from './schema';

export type NormalizedProjectOptions = {
  name: string;
  version: string;
  funding: Record<string, unknown>[];
  shortProjectName: string;
  fullProjectName: string;
  repositoryName: string;
  homepage: string;
  email: string;
  directory: string;
  currentUsername: string;
  ownerUsername: string;
  type: string;
  source: string;
  target: string;
};

export async function projectOptions(
  options: ProjectGeneratorSchema,
): Promise<NormalizedProjectOptions> {
  const type = options.type;
  const directory = normalize(options.directory).split(/[\\/]/).join('/');
  const source = join(__dirname, options.type);
  const target = directory;

  const main = await readJsonFile(join(workspaceRoot, 'package.json'));

  const funding = main.funding ?? [
    { type: 'CashApp', url: 'https://cash.app/$puqlib' },
  ];

  const shortProjectName = options.directory.split(/[\\/]/).pop();

  if (shortProjectName === undefined) {
    throw new Error('Short project name could not be determined');
  }

  const email = suffixEmail(
    gitEmail(),
    shortProjectName.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase(),
  );
  const repoUrl = gitRepoUrl();

  const repositoryName = gitRepoName(repoUrl);
  const fullProjectName = `@${repositoryName}/${shortProjectName}`;

  const currentUsername = gitCurrentUsername();
  const ownerUsername = gitRepoOwnerUsername(repoUrl);
  const version = main.version ?? '0.0.1';

  const homepage = githubPageForDoc(repoUrl, options.directory);

  return {
    version,
    funding,
    shortProjectName,
    fullProjectName,
    repositoryName,
    email,
    homepage,
    directory,
    currentUsername,
    ownerUsername,
    type,
    source,
    target,
    ...names(shortProjectName),
  };
}
