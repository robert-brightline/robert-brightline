// @index(['./**/*.ts', '!./**/*.{test,spec}.ts', '!./**/main.ts'], f => `export * from '${f.path}.js'`)
export * from './lib/auth.controller.js';
export * from './lib/auth.module.js';
export * from './lib/resources/user/user.controller.js';
export * from './lib/resources/user/user.module.js';

