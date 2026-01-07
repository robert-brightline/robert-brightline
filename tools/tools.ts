#!/usr/bin/env ts-node

import { program } from 'commander';
import { hello } from './commands/hello';
import { listProjects } from './commands/list-projects';

async function run() {
  program.name('tools').description('Common project management tools');

  hello(program);
  listProjects(program);

  program.parse();
}

run();
