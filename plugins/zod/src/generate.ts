import helper from '@prisma/generator-helper';

helper.generatorHandler({
  onGenerate: async (options) => {
    // const datamodel = options.dmmf.datamodel;
    // const models = datamodel.models;
    // const enums = datamodel.enums;
    // const output = options.generator.output?.value ?? '../src/zod';
    // await writeFile(join(output, 'zod.ts'), '/// Generated zod');
    console.log(options.generator);
  },

  onManifest: () => ({
    prettyName: 'Zod schema generator',
    config: {},
  }),
});
