import type { Tree } from '@nx/devkit';
import { updateJson } from '@nx/devkit';
import type { NormalizedProjectOptions } from './project-options';

export async function updateTsconfigReferences(
  tree: Tree,
  normalizedOptions: NormalizedProjectOptions,
) {
  await updateJson(tree, 'tsconfig.json', (value) => {
    if (value.references == undefined) {
      value.references = [];
    }

    const projectPath = `./${normalizedOptions.directory}`;

    if (
      !value.references.find((e: { path: string }) => e.path === projectPath)
    ) {
      value.references.push({ path: projectPath });
    }

    return value;
  });
}
