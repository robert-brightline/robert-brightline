// #!/usr/bin/env ts-node
import { execSync } from 'child_process';
import { chdir } from 'process';
import { projectroots } from './common/project-roots';
import { workspace } from './common/workspaces';
async function typedoc() {
  chdir(workspace());
  for (const root of await projectroots()) {
    chdir(root);

    //  "out": "../../../robert-brightline.github.io/public/libs/checks",
    // "favicon": "assets/favicon.png",
    // "tsconfig": "tsconfig.lib.json",
    // "includeVersion": true,
    // "excludeInternal": true,
    // "skipErrorChecking": true
    execSync(
      [
        `npx typedoc`,
        `--out=".../../../robert-brightline.github.io/public/${root}"`,
        `--favicon="assets/favicon.png"`,
        `--tsconfig="tsconfig.lib.json"`,
      ].join(' '),
    );
  }
}

typedoc();
