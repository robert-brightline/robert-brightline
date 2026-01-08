import type { Tree } from '@nx/devkit';
import {
  formatFiles,
  generateFiles,
  names,
  readProjectConfiguration,
} from '@nx/devkit';
import * as path from 'path';
import type { ResourceGeneratorSchema } from './schema';

export async function resourceGenerator(
  tree: Tree,
  options: ResourceGeneratorSchema,
) {
  const projectConfig = readProjectConfiguration(tree, options.project);

  let target = '';

  if (options.type === 'controller') {
    target = path.join(
      projectConfig.sourceRoot ?? projectConfig.root + '/src',
      'resources',
    );
  }

  generateFiles(tree, path.join(__dirname, options.type), target, {
    ...names(options.name),
  });
  await formatFiles(tree);
}

export default resourceGenerator;
