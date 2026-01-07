import type { Command } from 'commander';
import { apis, dbs, libs, plugins } from '../common/projects';

export function listProjects(program: Command) {
  program
    .command('list-projects')
    .option(
      '-t, --type <string>',
      'One of the options all, libs, dbs, plugins, or apis',
      'all',
    )
    .action(async ({ type }) => {
      switch (type) {
        case 'all': {
          console.log(
            [await libs(), await apis(), await dbs(), await plugins()].flat(),
          );
          break;
        }
        case 'libs': {
          console.log(await libs());
          break;
        }
        case 'dbs': {
          console.log(await dbs());
          break;
        }
        case 'apis': {
          console.log(await apis());
          break;
        }
        case 'plugins': {
          console.log(await plugins());
          break;
        }
      }
    });
}
