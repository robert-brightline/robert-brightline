import {
  formatFiles,
  generateFiles,
  type Tree
} from '@nx/devkit';
import { projectOptions } from './project-options';
import type { ProjectGeneratorSchema } from './schema';
import { updateTsconfigReferences } from './update-tsconfig';

export async function projectGenerator(
  tree: Tree,
  options: ProjectGeneratorSchema,
) {
  const normalizedProjectOptions = await projectOptions(options);

  await generateFiles(
    tree,
    normalizedProjectOptions.source,
    normalizedProjectOptions.target,
    normalizedProjectOptions,
  );

  updateTsconfigReferences(tree, normalizedProjectOptions);

  await formatFiles(tree);
}

export default projectGenerator;
