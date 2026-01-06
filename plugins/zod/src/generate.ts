import helper from '@prisma/generator-helper';
import { mkdir, writeFile } from 'fs/promises';
import { join } from 'path';
import { generateEnums } from './generate-enums.js';
import { generateInternals } from './generate-internals.js';
import { generateModels } from './generate-models.js';

helper.generatorHandler({
  onGenerate: async (options) => {
    const datamodel = options.dmmf.datamodel;
    const output = options.generator.output?.value ?? '../src/zod';

    const enums = generateEnums(datamodel);
    const internals = generateInternals(datamodel);
    const models = generateModels(datamodel);

    try {
      await mkdir(join(output));
    } catch {
      // Ignore
    }

    await writeFile(join(output, 'enums.ts'), enums);
    await writeFile(join(output, 'internals.ts'), internals);

    for (const [filePath, schema] of models) {
      try {
        await mkdir(join(output, filePath, '..'), { recursive: true });
      } catch {
        // Ignore
      }
      await writeFile(join(output, filePath), schema);
    }
  },

  onManifest: () => ({
    prettyName: 'Zod schema generator',
    config: {},
  }),
});
