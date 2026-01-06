import nx from '@nx/eslint-plugin';
import unusedImports from 'eslint-plugin-unused-imports';

export default [
  {
    files: ['**/*.json'],
    rules: {},
    languageOptions: {
      parser: await import('jsonc-eslint-parser'),
    },
  },
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],
  {
    ignores: [
      '**/dist',
      '**/out-tsc',
      '**/vitest.config.*.timestamp*',
      '**/vite.config.ts',
      '**/vitest.config.mts',
      '**/tests',
    ],
  },
  {
    files: ['**/*.json'],
    rules: {
      '@nx/dependency-checks': [
        'warn',
        {
          ignoredFiles: [
            '{projectRoot}/prisma.config.ts',
            '{projectRoot}/eslint.config.mts',
            '{projectRoot}/vite.config.ts',
            '{projectRoot}/vitest.config.mts',
          ],
        },
      ],
    },
    languageOptions: {
      parser: await import('jsonc-eslint-parser'),
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: ['^.*/eslint(\\.base)?\\.config\\.[cm]?[jt]s$'],
          depConstraints: [
            {
              sourceTag: '*',
              onlyDependOnLibsWithTags: ['*'],
            },
          ],
        },
      ],
    },
  },
  {
    files: ['**/*.ts', '**/*.cts', '**/*.mts'],
    rules: {
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
          fixStyle: 'separate-type-imports',
          disallowTypeAnnotations: false,
        },
      ],
    },
  },
  {
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: ['src/*'],
        },
      ],
    },
  },

  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    plugins: {
      'unused-imports': unusedImports, // 2. Register the plugin
    },
    rules: {
      // 3. Disable the standard rule to avoid duplicate warnings
      '@typescript-eslint/no-unused-vars': 'off',

      // 4. Configure the plugin to auto-fix unused imports
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
    },
  },
  {
    files: [
      '**/*.ts',
      '**/*.tsx',
      '**/*.cts',
      '**/*.mts',
      '**/*.js',
      '**/*.jsx',
      '**/*.cjs',
      '**/*.mjs',
    ],
    // Override or add rules here
    rules: {},
  },
];
