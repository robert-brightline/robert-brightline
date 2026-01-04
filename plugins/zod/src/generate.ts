import helper from '@prisma/generator-helper';
import { mkdir, writeFile } from 'fs/promises';
import { join } from 'path';

helper.generatorHandler({
  onGenerate: async (options) => {
    // const datamodel = options.dmmf.datamodel;
    // const models = datamodel.models;
    // const enums = datamodel.enums;
    const output = options.generator.output?.value ?? '../src/zod';

    try {
      await mkdir(output, { recursive: true });
    } catch {
      // Directory already exist.
    }

    await writeFile(join(output, 'zod.ts'), '/// Generated zod');
  },

  onManifest: () => ({
    prettyName: 'Zod schema generator',
    config: {},
  }),
});
