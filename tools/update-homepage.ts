// #!/usr/bin/env ts-node
import { readFile, writeFile } from 'fs/promises';
import { join } from 'path';
import { projectroots } from './common/project-roots';
import { workspace } from './common/workspaces';

async function update() {
  for (const root of await projectroots()) {
    const packagePath = join(root, 'package.json');

    const content = await readFile(packagePath, { encoding: 'utf-8' });
    const json = JSON.parse(content);

    const relativePath = root.replace(workspace(), '');
    json.homepage = `https://robert-brightline.github.io${relativePath}`;
    const updatedContent = JSON.stringify(json, undefined, 2);
    await writeFile(packagePath, updatedContent);
  }
}
update();
