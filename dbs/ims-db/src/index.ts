// @index(['./**/*.ts', '!./**/*.{test,spec}.ts'], f => `export * from '${f.path}.js'`)
export * from './generated/prisma/browser.js';
export * as Client from './generated/prisma/client.js';
export * as CommonInputTypes from './generated/prisma/commonInputTypes.js';
export * as Enums from './generated/prisma/enums.js';
export * as Classes from './generated/prisma/internal/class.js';

export * as Models from './generated/prisma/models.js';
export * from './generated/prisma/models/Product.js';
export * as Zod from './generated/zod/index.js';
export * from './lib/ims-db.js';
