import type { Command } from 'commander';

export function hello(program: Command) {
  program
    .command('hello')
    .requiredOption('-n, --name <str>', 'What is your  name?')
    .action(({ name }) => console.log(`Hello, ${name}`));
}
