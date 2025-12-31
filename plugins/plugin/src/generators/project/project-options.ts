import { readJsonFile, workspaceRoot } from '@nx/devkit';
import { join, normalize } from 'path';
import { gitCurrentUsername, gitEmail, gitRepoName } from '../../common/git';
import type { ProjectGeneratorSchema } from './schema';

export type NormalizedProjectOptions = {
  version: string;
  funding: Record<string, unknown>[];
  shortProjectName: string;
  fullProjectName: string;
  repositoryName: string;
  email: string;
  directory: string;
  currentUsername: string;

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

  const email = gitEmail();
  const repositoryName = gitRepoName();
  const fullProjectName = `@${repositoryName}/${shortProjectName}`;

  const currentUsername = gitCurrentUsername();

  const version = main.version ?? '0.0.1';

  return {
    version,
    funding,
    shortProjectName,
    fullProjectName,
    repositoryName,
    email,
    directory,
    currentUsername,
    type,
    source,
    target,
  };
}
