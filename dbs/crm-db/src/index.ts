// @index(['./**/*.ts', '!./**/*.{test,spec}.ts', '!./**/prisma/models/*', '!./**/internal/*'], f => `export * as ${f.name.toUpperCase().trim().replace(/-/g, '_')} from '${f.path}.js'`)
export * as BROWSER from './generated/prisma/browser.js';
export * as CLIENT from './generated/prisma/client.js';
export * as COMMONINPUTTYPES from './generated/prisma/commonInputTypes.js';
export * as ENUMS from './generated/prisma/enums.js';
export * as MODELS from './generated/prisma/models.js';
export * as INDEX from './generated/zod/index.js';
