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

  const __names = names(options.name);
  const source = path.join(__dirname, options.type);
  const target = path.join(
    projectConfig.sourceRoot ?? projectConfig.root + '/src',
    'lib',
    'resources',
    __names.fileName,
  );

  generateFiles(tree, source, target, { ...__names });

  await formatFiles(tree);
}

export default resourceGenerator;
