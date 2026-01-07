import type { Command } from 'commander';

export function updatePackageProperty(program: Command) {
  program
    .command('update-package')
    .requiredOption('-d, --directory <str>', 'Project directory')
    .requiredOption('-k, --key <str>', 'Property name')
    .requiredOption('-v, --value <str>', 'New value')
    .action(async ({ directory, key, value }) => {
      // - create fs library
    });
}
