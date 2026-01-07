// #!/usr/bin/env ts-node
import { execSync } from 'child_process';
import { chdir } from 'process';
import { projectroots } from './common/project-roots';
import { workspace } from './common/workspaces';
async function typedoc() {
  chdir(workspace());
  for (const root of await projectroots()) {
    chdir(root);

    const relativeRoot = root.replace(workspace(), '');
    execSync(
      [
        `npx typedoc`,
        `--out "../../../robert-brightline.github.io/docs/${relativeRoot}"`,
        `--favicon "assets/favicon.png"`,
        `--tsconfig "tsconfig.lib.json"`,
        `--skipErrorChecking true`,
        `--excludeInternal true`,
        `--includeVersion true`,
      ].join(' '),
      { stdio: 'inherit' },
    );
  }
}

typedoc();
