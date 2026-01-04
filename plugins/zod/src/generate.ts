import helper from '@prisma/generator-helper';

helper.generatorHandler({
  onGenerate: async (options) => {
    // - [ ] implement the zod schema generators
    console.log(options.dmmf.datamodel.models.map((e) => e.name));
    console.log(options.dmmf.datamodel.enums.map((e) => e.name));
  },

  onManifest: () => ({
    prettyName: 'Zod schema generator',
    config: {},
  }),
});
